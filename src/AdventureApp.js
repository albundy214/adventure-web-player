// AdventureApp.js - Player-only version for Netlify deployment
import React from 'react';
import { ChevronRight, Home, RotateCcw, BookOpen, Play } from 'lucide-react';
import { webStories } from './webStories.js';

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
      neutral: 'bg-gray-600 hover:bg-gray-700 text-white'
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
// STORY PLAYER COMPONENT
// ============================================================================

class StoryPlayer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentNodeId: props.story.startNode,
      history: [props.story.startNode],
      gameStartTime: Date.now()
    };
    
    // Anti-cheat: prevent back button navigation
    this.originalPushState = window.history.pushState;
    this.originalReplaceState = window.history.replaceState;
    
    window.history.pushState = () => {};
    window.history.replaceState = () => {};
    
    window.addEventListener('popstate', this.preventBack);
  }

  componentWillUnmount() {
    window.history.pushState = this.originalPushState;
    window.history.replaceState = this.originalReplaceState;
    window.removeEventListener('popstate', this.preventBack);
  }

  preventBack = (e) => {
    e.preventDefault();
    window.history.pushState(null, null, window.location.pathname);
  }

  handleChoice = (nextNodeId) => {
    this.setState(prevState => ({
      currentNodeId: nextNodeId,
      history: [...prevState.history, nextNodeId]
    }));
  }

  handleRestart = () => {
    this.setState({
      currentNodeId: this.props.story.startNode,
      history: [this.props.story.startNode],
      gameStartTime: Date.now()
    });
  }

  getCurrentNode = () => {
    return this.props.story.nodes[this.state.currentNodeId];
  }

  getEndingMessage = (endingType) => {
    const messages = {
      good: "Congratulations! You've achieved a positive outcome.",
      bad: "Your story has come to a difficult end.",
      neutral: "Your adventure concludes here."
    };
    return messages[endingType] || messages.neutral;
  }

  formatStoryText = (text) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {paragraph}
      </p>
    ));
  }

  render() {
    const { story, onExit } = this.props;
    const currentNode = this.getCurrentNode();
    const gameTime = Math.floor((Date.now() - this.state.gameStartTime) / 1000);

    if (!currentNode) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-red-900 to-black flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Story Error</h1>
            <p className="mb-4">The story node could not be found.</p>
            <Button onClick={onExit} variant="neutral">
              Return to Menu
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-indigo-900">
        {/* Header */}
        <div className="bg-black/30 p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-white">{story.title}</h1>
              <p className="text-purple-200 text-sm">
                Scene {this.state.history.length} • {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={this.handleRestart}
                className="p-2 bg-yellow-600 hover:bg-yellow-700 rounded text-white transition-colors"
                title="Restart Story"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onExit}
                className="p-2 bg-gray-600 hover:bg-gray-700 rounded text-white transition-colors"
                title="Exit to Menu"
              >
                <Home className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
            <div className="prose prose-invert max-w-none">
              <div className="text-lg text-white leading-relaxed">
                {this.formatStoryText(currentNode.text)}
              </div>
            </div>
          </div>

          {/* Choices or Ending */}
          {currentNode.isEnding ? (
            <div className="text-center">
              <div className={`inline-block px-6 py-3 rounded-lg mb-6 ${
                currentNode.endingType === 'good' ? 'bg-green-600' :
                currentNode.endingType === 'bad' ? 'bg-red-600' : 'bg-blue-600'
              }`}>
                <p className="text-white font-semibold">
                  {this.getEndingMessage(currentNode.endingType)}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h3 className="text-white font-semibold mb-3">Your Journey:</h3>
                <div className="text-purple-200 text-sm">
                  <p>Scenes visited: {this.state.history.length}</p>
                  <p>Time played: {Math.floor(gameTime / 60)}m {gameTime % 60}s</p>
                  <p>Ending type: {currentNode.endingType}</p>
                </div>
              </div>

              <div className="space-x-4">
                <Button onClick={this.handleRestart} variant="primary" icon={RotateCcw}>
                  Play Again
                </Button>
                <Button onClick={onExit} variant="neutral" icon={Home}>
                  Choose Different Story
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {currentNode.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => this.handleChoice(choice.nextNode)}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{choice.text}</span>
                    <ChevronRight className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

// ============================================================================
// STORY SELECTOR COMPONENT
// ============================================================================

class StorySelector extends React.Component {
  render() {
    const { stories, onSelectStory } = this.props;
    
    // Create story metadata from stories object
    const storyMetadata = Object.values(stories).map(story => ({
      id: story.id,
      title: story.title,
      description: story.description,
      nodeCount: Object.keys(story.nodes).length,
      choiceCount: Object.values(story.nodes).reduce((sum, node) => sum + node.choices.length, 0)
    }));
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <BookOpen className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-2">Choose Your Adventure</h1>
          <p className="text-purple-200 text-lg">Select a story to begin your journey</p>
          <div className="mt-4 bg-white/10 rounded-full px-4 py-2 inline-block">
            <span className="text-white font-medium">{storyMetadata.length} adventures available</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {storyMetadata.map((story) => (
            <Card key={story.id} onClick={() => onSelectStory(story.id)}>
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-white mb-2">{story.title}</h2>
                <p className="text-purple-200 text-sm mb-3">{story.description}</p>
                <div className="flex justify-between text-xs text-purple-300">
                  <span>{story.nodeCount} scenes</span>
                  <span>{story.choiceCount} choices</span>
                </div>
              </div>
              
              <Button variant="primary" icon={Play} className="w-full">
                Start Adventure
              </Button>
            </Card>
          ))}
          
          {storyMetadata.length === 0 && (
            <div className="col-span-full text-center py-12">
              <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">No stories available</h3>
              <p className="text-purple-300 mb-4">Stories will appear here when they're added.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// ============================================================================
// MAIN APP - PLAYER ONLY
// ============================================================================

class AdventureApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentView: 'selector',
      selectedStory: null
    };
  }

  handleSelectStory = (storyId) => {
    this.setState({
      currentView: 'player',
      selectedStory: webStories[storyId]
    });
  }

  handleExitStory = () => {
    this.setState({
      currentView: 'selector',
      selectedStory: null
    });
  }

  render() {
    const { currentView, selectedStory } = this.state;

    switch (currentView) {
      case 'selector':
        return <StorySelector stories={webStories} onSelectStory={this.handleSelectStory} />;

      case 'player':
        return (
          <StoryPlayer 
            story={selectedStory}
            onExit={this.handleExitStory}
          />
        );

      default:
        return <div>Unknown view</div>;
    }
  }
}

export default AdventureApp;