// LocalEditorApp.js - Full editing capabilities for your local use
import React from 'react';
import { Book, Plus, Edit, Trash2, Home, Download, Upload } from 'lucide-react';

// ============================================================================
// DATA CLASSES
// ============================================================================

class StoryNode {
  constructor(id, text, choices = [], isEnding = false, endingType = 'neutral') {
    this.id = id;
    this.text = text;
    this.choices = choices;
    this.isEnding = isEnding;
    this.endingType = endingType;
  }

  addChoice(text, nextNode) {
    this.choices.push({ text, nextNode });
  }

  removeChoice(index) {
    this.choices.splice(index, 1);
  }

  updateChoice(index, text, nextNode) {
    if (this.choices[index]) {
      this.choices[index] = { text, nextNode };
    }
  }
}

class Story {
  constructor(id, title, description, startNode = 'start') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startNode = startNode;
    this.nodes = {};
    
    this.nodes[startNode] = new StoryNode(startNode, 'Your adventure begins here...');
  }

  addNode(id, text, choices = [], isEnding = false, endingType = 'neutral') {
    this.nodes[id] = new StoryNode(id, text, choices, isEnding, endingType);
  }

  removeNode(id) {
    if (id !== this.startNode) {
      delete this.nodes[id];
      Object.values(this.nodes).forEach(node => {
        node.choices = node.choices.filter(choice => choice.nextNode !== id);
      });
    }
  }

  getNode(id) {
    return this.nodes[id];
  }

  getStartNode() {
    return this.nodes[this.startNode];
  }

  getNodeCount() {
    return Object.keys(this.nodes).length;
  }

  validateStory() {
    const issues = [];
    Object.values(this.nodes).forEach(node => {
      node.choices.forEach(choice => {
        if (choice.nextNode && !this.nodes[choice.nextNode]) {
          issues.push(`Node "${node.id}" has choice pointing to missing node "${choice.nextNode}"`);
        }
      });
    });
    return issues;
  }
}

// ============================================================================
// ENHANCED STORAGE MANAGER FOR LOCAL EDITOR
// ============================================================================

class LocalStorageManager {
  static STORAGE_KEY = 'localEditorStories';

  static saveStories(stories) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stories));
      return true;
    } catch (error) {
      console.error('Failed to save stories:', error);
      return false;
    }
  }

  static loadStories() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Failed to load stories:', error);
      return {};
    }
  }

  static exportStory(story) {
    const dataStr = JSON.stringify(story, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${story.title.replace(/[^a-z0-9]/gi, '_')}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  static exportAllStoriesForWeb(stories) {
    const webStories = {};
    
    Object.values(stories).forEach(story => {
      webStories[story.id] = {
        id: story.id,
        title: story.title,
        description: story.description,
        startNode: story.startNode,
        nodes: story.nodes
      };
    });

    const dataStr = `// Auto-generated stories for web deployment
// Generated on: ${new Date().toLocaleString()}
// Total stories: ${Object.keys(webStories).length}
export const webStories = ${JSON.stringify(webStories, null, 2)};`;
    
    const dataUri = 'data:application/javascript;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'webStories.js');
    linkElement.click();

    alert(`Exported ${Object.keys(webStories).length} stories for web deployment!\n\nThis file contains ALL your current stories and will replace the previous version.`);
  }

  static importStory(onSuccess, onError) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedStory = JSON.parse(event.target.result);
          importedStory.id = `imported-${Date.now()}`;
          onSuccess(importedStory);
        } catch (error) {
          onError('Error importing story. Please check the file format.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }
}

// ============================================================================
// UI COMPONENTS
// ============================================================================

class Button extends React.Component {
  render() {
    const { 
      onClick, 
      children, 
      variant = 'primary', 
      size = 'medium',
      icon: Icon,
      disabled = false,
      className = '',
      title
    } = this.props;

    const baseClasses = 'font-semibold rounded transition-colors flex items-center justify-center space-x-2';
    
    const variantClasses = {
      primary: 'bg-yellow-500 hover:bg-yellow-600 text-black',
      secondary: 'bg-purple-600 hover:bg-purple-700 text-white',
      success: 'bg-green-600 hover:bg-green-700 text-white',
      danger: 'bg-red-600 hover:bg-red-700 text-white',
      info: 'bg-blue-600 hover:bg-blue-700 text-white',
      neutral: 'bg-gray-600 hover:bg-gray-700 text-white',
      special: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
    };

    const sizeClasses = {
      small: 'py-1 px-2 text-sm',
      medium: 'py-2 px-4',
      large: 'py-3 px-6'
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    return (
      <button 
        onClick={disabled ? undefined : onClick} 
        className={classes}
        title={title}
        disabled={disabled}
      >
        {Icon && <Icon className="w-4 h-4" />}
        <span>{children}</span>
      </button>
    );
  }
}

class Card extends React.Component {
  render() {
    const { children, className = '', onClick } = this.props;
    const baseClasses = 'bg-white/10 backdrop-blur-sm rounded-lg p-6';
    const hoverClasses = onClick ? 'hover:bg-white/20 cursor-pointer' : '';
    
    return (
      <div 
        className={`${baseClasses} ${hoverClasses} ${className}`} 
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

// ============================================================================
// LOCAL EDITOR MAIN SCREEN
// ============================================================================

class LocalEditorMainScreen extends React.Component {
  render() {
    const { onManageClick, onExportAllClick, storyCount } = this.props;
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <Edit className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-2">Story Creator Studio</h1>
          <p className="text-purple-200 text-lg">Professional adventure story editor</p>
          <div className="mt-4 bg-white/10 rounded-full px-4 py-2 inline-block">
            <span className="text-white font-medium">{storyCount} stories created</span>
          </div>
        </div>
        
        <div className="space-y-4 w-full max-w-md">
          <Button onClick={onManageClick} variant="primary" icon={Edit} size="large" className="w-full">
            Manage Stories
          </Button>
          
          <Button 
            onClick={onExportAllClick} 
            variant="special" 
            icon={Download} 
            size="large" 
            className="w-full"
            title="Export all stories for web deployment"
          >
            Export for Web
          </Button>
          
          <div className="text-center mt-6">
            <p className="text-purple-300 text-sm">
              💡 Create stories here, then export for your website
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class LocalStoryListScreen extends React.Component {
  render() {
    const { 
      stories, 
      onBack, 
      onNewStory, 
      onEditStory, 
      onDeleteStory, 
      onExportStory,
      onImportStory,
      onExportAllStories
    } = this.props;
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Button onClick={onBack} variant="neutral" icon={Home} size="small" className="mr-4">
              </Button>
              <h1 className="text-4xl font-bold text-white">Story Creator Studio</h1>
            </div>
            <div className="flex space-x-2">
              <Button onClick={onImportStory} variant="info" icon={Upload}>
                Import Story
              </Button>
              <Button onClick={onExportAllStories} variant="special" icon={Download}>
                Export All for Web
              </Button>
              <Button onClick={onNewStory} variant="success" icon={Plus}>
                New Story
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(stories).map((story) => (
              <Card key={story.id} className="relative">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white mb-2">{story.title}</h2>
                  <p className="text-purple-200 text-sm mb-3">{story.description}</p>
                  <div className="flex justify-between text-xs text-purple-300">
                    <span>{Object.keys(story.nodes).length} scenes</span>
                    <span>{Object.values(story.nodes).reduce((sum, node) => sum + node.choices.length, 0)} choices</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button onClick={() => onEditStory(story)} variant="info" size="small" className="flex-1">
                    <Edit className="w-3 h-3" />
                    <span>Edit</span>
                  </Button>
                  <Button onClick={() => onExportStory(story)} variant="secondary" size="small" title="Export Story">
                    <Download className="w-3 h-3" />
                  </Button>
                  <Button onClick={() => onDeleteStory(story.id)} variant="danger" size="small" title="Delete Story">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </Card>
            ))}
            
            {Object.keys(stories).length === 0 && (
              <div className="col-span-full text-center py-12">
                <Book className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl text-white mb-2">No stories yet</h3>
                <p className="text-purple-300 mb-4">Create your first adventure story!</p>
                <Button onClick={onNewStory} variant="success" icon={Plus}>
                  Create First Story
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// ============================================================================
// MAIN LOCAL EDITOR APP
// ============================================================================

class LocalEditorApp extends React.Component {
  constructor(props) {
    super(props);
    
    const sampleStories = this.createSampleStories();
    const savedStories = LocalStorageManager.loadStories();
    
    this.state = {
      currentView: 'menu',
      stories: { ...sampleStories, ...savedStories },
      editingStory: null
    };
  }

  createSampleStories() {
    const hauntedMansion = new Story(
      'haunted-mansion',
      'The Haunted Mansion',
      'Explore a mysterious mansion filled with supernatural secrets.'
    );
    
    hauntedMansion.addNode('entrance',
      "You stand before a towering Victorian mansion. Lightning illuminates its Gothic architecture as rain pounds the cobblestone path. The front door creaks open in the wind, revealing only darkness within.",
      [
        { text: "Enter through the front door", nextNode: "foyer" },
        { text: "Circle around to find a back entrance", nextNode: "garden" },
        { text: "Leave immediately", nextNode: "leave" }
      ]
    );

    hauntedMansion.addNode('foyer',
      "The grand foyer stretches before you, dominated by a sweeping staircase. Dust motes dance in the moonlight streaming through tall windows. You hear a faint melody playing from somewhere upstairs.",
      [
        { text: "Climb the staircase toward the music", nextNode: "upstairs" },
        { text: "Explore the rooms on the ground floor", nextNode: "groundfloor" }
      ]
    );

    hauntedMansion.addNode('garden',
      "The overgrown garden is a maze of thorny roses and twisted vines. You discover a servant's entrance, but also notice a cellar door partially hidden by ivy.",
      [
        { text: "Try the servant's entrance", nextNode: "kitchen" },
        { text: "Open the cellar door", nextNode: "cellar" }
      ]
    );

    hauntedMansion.addNode('leave',
      "You turn away from the mansion and walk back down the path. As you reach the gate, you hear a woman's voice calling for help from inside. But it's too late now - the gate slams shut behind you with a resounding clang.",
      [], true, 'neutral'
    );

    hauntedMansion.addNode('upstairs',
      "The music grows louder as you climb. At the top of the stairs, you see a ghostly figure in white playing a piano in the moonlit room. She turns to look at you with sad, hollow eyes.",
      [
        { text: "Approach the ghostly pianist", nextNode: "ghost-encounter" }
      ]
    );

    hauntedMansion.addNode('groundfloor',
      "You explore the ground floor rooms, finding old portraits whose eyes seem to follow you. In the library, you discover a secret passage behind a bookshelf.",
      [
        { text: "Enter the secret passage", nextNode: "secret-passage" }
      ]
    );

    hauntedMansion.addNode('kitchen',
      "The kitchen is filled with cobwebs and the scent of decay. On the table lies an old diary, its pages yellowed with age.",
      [
        { text: "Read the diary", nextNode: "diary" }
      ]
    );

    hauntedMansion.addNode('cellar',
      "The cellar is dark and cold. You hear strange noises and realize you're not alone. Something sinister lurks in the shadows.",
      [], true, 'bad'
    );

    hauntedMansion.addNode('ghost-encounter',
      "The ghost speaks in a voice like wind through leaves: 'I've been waiting so long for someone to hear my story. Help me find peace, and I'll show you treasures beyond imagination.'",
      [], true, 'good'
    );

    hauntedMansion.addNode('secret-passage',
      "The secret passage leads to a hidden room filled with treasure and ancient artifacts. You've discovered the mansion's greatest secret!",
      [], true, 'good'
    );

    hauntedMansion.addNode('diary',
      "The diary reveals the tragic story of Lady Eleanor, who died in this mansion 100 years ago. You feel a presence behind you and turn to see her ghost, grateful that someone finally knows her story.",
      [], true, 'good'
    );

    hauntedMansion.startNode = 'entrance';

    return {
      [hauntedMansion.id]: hauntedMansion
    };
  }

  saveToStorage() {
    LocalStorageManager.saveStories(this.state.stories);
  }

  handleNewStory = () => {
    const newStory = new Story(
      `story-${Date.now()}`,
      'New Adventure',
      'A new story waiting to be written.'
    );
    
    this.setState({
      editingStory: newStory,
      currentView: 'editor'
    });
  }

  handleSaveStory = (story) => {
    const newStories = { ...this.state.stories };
    newStories[story.id] = story;
    
    this.setState({
      stories: newStories,
      currentView: 'story-list',
      editingStory: null
    }, () => {
      this.saveToStorage();
    });
  }

  handleDeleteStory = (storyId) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      const newStories = { ...this.state.stories };
      delete newStories[storyId];
      
      this.setState({ stories: newStories }, () => {
        this.saveToStorage();
      });
    }
  }

  handleExportStory = (story) => {
    LocalStorageManager.exportStory(story);
  }

  handleExportAllStories = () => {
    LocalStorageManager.exportAllStoriesForWeb(this.state.stories);
  }

  handleImportStory = () => {
    LocalStorageManager.importStory(
      (importedStory) => {
        const newStories = { ...this.state.stories };
        newStories[importedStory.id] = importedStory;
        
        this.setState({ stories: newStories }, () => {
          this.saveToStorage();
          alert('Story imported successfully!');
        });
      },
      (error) => {
        alert(error);
      }
    );
  }

  render() {
    const { currentView, stories } = this.state;

    switch (currentView) {
      case 'menu':
        return (
          <LocalEditorMainScreen 
            onManageClick={() => this.setState({ currentView: 'story-list' })}
            onExportAllClick={this.handleExportAllStories}
            storyCount={Object.keys(stories).length}
          />
        );

      case 'story-list':
        return (
          <LocalStoryListScreen 
            stories={stories}
            onBack={() => this.setState({ currentView: 'menu' })}
            onNewStory={this.handleNewStory}
            onEditStory={(story) => this.setState({ editingStory: story, currentView: 'editor' })}
            onDeleteStory={this.handleDeleteStory}
            onExportStory={this.handleExportStory}
            onImportStory={this.handleImportStory}
            onExportAllStories={this.handleExportAllStories}
          />
        );

      case 'editor':
        return <StoryEditor 
          story={this.state.editingStory}
          onSave={this.handleSaveStory}
          onCancel={() => this.setState({ currentView: 'story-list', editingStory: null })}
        />;

      default:
        return <div>Unknown view</div>;
    }
  }
}

// ============================================================================
// STORY EDITOR COMPONENT
// ============================================================================

class StoryEditor extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      story: { ...props.story },
      selectedNode: props.story.startNode,
      nodeText: props.story.nodes[props.story.startNode]?.text || '',
      nodeChoices: props.story.nodes[props.story.startNode]?.choices || [],
      isEnding: props.story.nodes[props.story.startNode]?.isEnding || false,
      endingType: props.story.nodes[props.story.startNode]?.endingType || 'neutral'
    };
  }

  updateCurrentNode() {
    const { story, selectedNode, nodeText, nodeChoices, isEnding, endingType } = this.state;
    
    if (story.nodes[selectedNode]) {
      story.nodes[selectedNode].text = nodeText;
      story.nodes[selectedNode].choices = [...nodeChoices];
      story.nodes[selectedNode].isEnding = isEnding;
      story.nodes[selectedNode].endingType = endingType;
    }
    
    this.setState({ story });
  }

  selectNode = (nodeId) => {
    this.updateCurrentNode();
    
    const node = this.state.story.nodes[nodeId];
    this.setState({
      selectedNode: nodeId,
      nodeText: node.text,
      nodeChoices: [...node.choices],
      isEnding: node.isEnding || false,
      endingType: node.endingType || 'neutral'
    });
  }

  addChoice = () => {
    this.setState({
      nodeChoices: [...this.state.nodeChoices, { text: 'New choice', nextNode: '' }]
    });
  }

  updateChoice = (index, field, value) => {
    const newChoices = [...this.state.nodeChoices];
    newChoices[index][field] = value;
    this.setState({ nodeChoices: newChoices });
  }

  removeChoice = (index) => {
    const newChoices = this.state.nodeChoices.filter((_, i) => i !== index);
    this.setState({ nodeChoices: newChoices });
  }

  addNewNode = () => {
    const nodeId = prompt('Enter new node ID:');
    if (nodeId && !this.state.story.nodes[nodeId]) {
      const story = { ...this.state.story };
      story.nodes[nodeId] = new StoryNode(nodeId, 'New scene text...');
      this.setState({ story });
    }
  }

  deleteNode = (nodeId) => {
    if (nodeId === this.state.story.startNode) {
      alert('Cannot delete the start node');
      return;
    }
    
    if (window.confirm(`Delete node "${nodeId}"?`)) {
      const story = { ...this.state.story };
      delete story.nodes[nodeId];
      
      // Remove references to this node
      Object.values(story.nodes).forEach(node => {
        node.choices = node.choices.filter(choice => choice.nextNode !== nodeId);
      });
      
      this.setState({ 
        story,
        selectedNode: story.startNode
      }, () => {
        this.selectNode(story.startNode);
      });
    }
  }

  handleSave = () => {
    this.updateCurrentNode();
    
    const issues = this.state.story.validateStory();
    if (issues.length > 0) {
      const proceed = window.confirm(
        `Story has issues:\n${issues.join('\n')}\n\nSave anyway?`
      );
      if (!proceed) return;
    }
    
    this.props.onSave(this.state.story);
  }

  render() {
    const { story, selectedNode, nodeText, nodeChoices, isEnding, endingType } = this.state;
    const { onCancel } = this.props;

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white">Story Editor</h1>
            <div className="flex space-x-2">
              <Button onClick={this.handleSave} variant="success">
                Save Story
              </Button>
              <Button onClick={onCancel} variant="neutral">
                Cancel
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Story Info Panel */}
            <Card>
              <h2 className="text-xl font-semibold text-white mb-4">Story Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={story.title}
                    onChange={(e) => this.setState({ 
                      story: { ...story, title: e.target.value }
                    })}
                    className="w-full bg-white/20 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={story.description}
                    onChange={(e) => this.setState({ 
                      story: { ...story, description: e.target.value }
                    })}
                    rows={3}
                    className="w-full bg-white/20 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">Start Node</label>
                  <select
                    value={story.startNode}
                    onChange={(e) => this.setState({ 
                      story: { ...story, startNode: e.target.value }
                    })}
                    className="w-full bg-white/20 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {Object.keys(story.nodes).map(nodeId => (
                      <option key={nodeId} value={nodeId} className="bg-slate-800">
                        {nodeId}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>

            {/* Node List Panel */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">Scenes</h2>
                <Button onClick={this.addNewNode} variant="success" size="small">
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {Object.keys(story.nodes).map((nodeId) => (
                  <div key={nodeId} className="flex items-center space-x-2">
                    <button
                      onClick={() => this.selectNode(nodeId)}
                      className={`flex-1 text-left p-3 rounded transition-colors ${
                        selectedNode === nodeId 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-white/20 text-purple-200 hover:bg-white/30'
                      }`}
                    >
                      <div className="font-medium flex items-center">
                        {nodeId}
                        {nodeId === story.startNode && (
                          <span className="ml-2 text-xs bg-green-500 px-2 py-1 rounded">START</span>
                        )}
                        {story.nodes[nodeId].isEnding && (
                          <span className="ml-2 text-xs bg-red-500 px-2 py-1 rounded">END</span>
                        )}
                      </div>
                      <div className="text-sm opacity-75 truncate">
                        {story.nodes[nodeId].text.substring(0, 40)}...
                      </div>
                    </button>
                    {nodeId !== story.startNode && (
                      <Button 
                        onClick={() => this.deleteNode(nodeId)} 
                        variant="danger" 
                        size="small"
                        title="Delete Node"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Node Editor Panel */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Edit Scene: {selectedNode}
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                      Scene Text
                    </label>
                    <textarea
                      value={nodeText}
                      onChange={(e) => this.setState({ nodeText: e.target.value })}
                      rows={6}
                      className="w-full bg-white/20 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Describe what happens in this scene..."
                    />
                  </div>
                  
                  {/* Ending Controls */}
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={isEnding}
                        onChange={(e) => this.setState({ isEnding: e.target.checked })}
                        className="mr-2"
                      />
                      <span className="text-purple-200 text-sm">This is an ending</span>
                    </label>
                    {isEnding && (
                      <select
                        value={endingType}
                        onChange={(e) => this.setState({ endingType: e.target.value })}
                        className="bg-white/20 text-white rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                      >
                        <option value="good" className="bg-slate-800">Good Ending</option>
                        <option value="bad" className="bg-slate-800">Bad Ending</option>
                        <option value="neutral" className="bg-slate-800">Neutral Ending</option>
                      </select>
                    )}
                  </div>
                  
                  {/* Choices Editor */}
                  {!isEnding && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-purple-200 text-sm font-medium">
                          Choices
                        </label>
                        <Button onClick={this.addChoice} variant="success" size="small">
                          Add Choice
                        </Button>
                      </div>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {nodeChoices.map((choice, index) => (
                          <div key={index} className="bg-white/10 rounded p-3">
                            <input
                              type="text"
                              placeholder="Choice text (what the player sees)"
                              value={choice.text}
                              onChange={(e) => this.updateChoice(index, 'text', e.target.value)}
                              className="w-full bg-white/20 text-white rounded px-2 py-1 mb-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                            <div className="flex space-x-2">
                              <select
                                value={choice.nextNode}
                                onChange={(e) => this.updateChoice(index, 'nextNode', e.target.value)}
                                className="flex-1 bg-white/20 text-white rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                              >
                                <option value="" className="bg-slate-800">Select next scene...</option>
                                {Object.keys(story.nodes).map(nodeId => (
                                  <option key={nodeId} value={nodeId} className="bg-slate-800">
                                    {nodeId}
                                  </option>
                                ))}
                              </select>
                              <Button 
                                onClick={() => this.removeChoice(index)} 
                                variant="danger" 
                                size="small"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        ))}
                        {nodeChoices.length === 0 && (
                          <div className="text-center text-purple-300 text-sm py-4">
                            No choices added yet. Add a choice to continue the story.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>

          {/* Story Validation */}
          <Card className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Story Validation</h3>
            <StoryValidator story={story} />
          </Card>
        </div>
      </div>
    );
  }
}

// ============================================================================
// STORY VALIDATOR COMPONENT
// ============================================================================

class StoryValidator extends React.Component {
  validateStory() {
    const { story } = this.props;
    const issues = [];
    const warnings = [];
    
    // Check for broken links
    Object.values(story.nodes).forEach(node => {
      node.choices.forEach(choice => {
        if (choice.nextNode && !story.nodes[choice.nextNode]) {
          issues.push(`Scene "${node.id}" has choice pointing to missing scene "${choice.nextNode}"`);
        }
      });
    });
    
    // Check for unreachable nodes
    const reachableNodes = new Set([story.startNode]);
    const toVisit = [story.startNode];
    
    while (toVisit.length > 0) {
      const nodeId = toVisit.pop();
      const node = story.nodes[nodeId];
      if (node) {
        node.choices.forEach(choice => {
          if (choice.nextNode && !reachableNodes.has(choice.nextNode)) {
            reachableNodes.add(choice.nextNode);
            toVisit.push(choice.nextNode);
          }
        });
      }
    }
    
    Object.keys(story.nodes).forEach(nodeId => {
      if (!reachableNodes.has(nodeId)) {
        warnings.push(`Scene "${nodeId}" is unreachable from the start`);
      }
    });
    
    // Check for dead ends (non-ending nodes with no choices)
    Object.values(story.nodes).forEach(node => {
      if (!node.isEnding && node.choices.length === 0) {
        warnings.push(`Scene "${node.id}" has no choices and is not marked as an ending`);
      }
    });
    
    return { issues, warnings };
  }

  render() {
    const { issues, warnings } = this.validateStory();
    
    return (
      <div>
        {issues.length === 0 && warnings.length === 0 && (
          <div className="text-green-400 text-sm">
            Story validation passed! No issues found.
          </div>
        )}
        
        {issues.length > 0 && (
          <div className="mb-4">
            <h4 className="text-red-400 font-medium mb-2">Issues (must fix):</h4>
            <ul className="text-red-300 text-sm space-y-1">
              {issues.map((issue, index) => (
                <li key={index}>• {issue}</li>
              ))}
            </ul>
          </div>
        )}
        
        {warnings.length > 0 && (
          <div>
            <h4 className="text-yellow-400 font-medium mb-2">Warnings (recommended fixes):</h4>
            <ul className="text-yellow-300 text-sm space-y-1">
              {warnings.map((warning, index) => (
                <li key={index}>• {warning}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-4 text-purple-300 text-sm">
          Story Statistics: {Object.keys(this.props.story.nodes).length} scenes, 
          {Object.values(this.props.story.nodes).reduce((sum, node) => sum + node.choices.length, 0)} total choices
        </div>
      </div>
    );
  }
}

export default LocalEditorApp;