// Auto-generated stories for web deployment
export const webStories = {
  "haunted-mansion": {
    "id": "haunted-mansion",
    "title": "The Haunted Mansion",
    "description": "Explore a mysterious mansion filled with supernatural secrets.",
    "startNode": "entrance",
    "nodes": {
      "start": {
        "id": "start",
        "text": "Your adventure begins here...",
        "choices": [],
        "isEnding": false,
        "endingType": "neutral"
      },
      "entrance": {
        "id": "entrance",
        "text": "You stand before a towering Victorian mansion. Lightning illuminates its Gothic architecture as rain pounds the cobblestone path. The front door creaks open in the wind, revealing only darkness within.",
        "choices": [
          {
            "text": "Enter through the front door",
            "nextNode": "foyer"
          },
          {
            "text": "Circle around to find a back entrance",
            "nextNode": "garden"
          },
          {
            "text": "Leave immediately",
            "nextNode": "leave"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "foyer": {
        "id": "foyer",
        "text": "The grand foyer stretches before you, dominated by a sweeping staircase. Dust motes dance in the moonlight streaming through tall windows. You hear a faint melody playing from somewhere upstairs.",
        "choices": [
          {
            "text": "Climb the staircase toward the music",
            "nextNode": "upstairs"
          },
          {
            "text": "Explore the rooms on the ground floor",
            "nextNode": "groundfloor"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "leave": {
        "id": "leave",
        "text": "You turn away from the mansion and walk back down the path. As you reach the gate, you hear a woman's voice calling for help from inside. But it's too late now - the gate slams shut behind you with a resounding clang.",
        "choices": [],
        "isEnding": true,
        "endingType": "neutral"
      },
      "upstairs": {
        "id": "upstairs",
        "text": "The music grows louder as you climb. At the top of the stairs, you see a ghostly figure in white playing a piano in the moonlit room. She turns to look at you with sad, hollow eyes.",
        "choices": [
          {
            "text": "Approach the ghostly pianist",
            "nextNode": "ghost-encounter"
          }
        ],
        "isEnding": false,
        "endingType": "neutral"
      },
      "ghost-encounter": {
        "id": "ghost-encounter",
        "text": "The ghost speaks in a voice like wind through leaves: 'I've been waiting so long for someone to hear my story. Help me find peace, and I'll show you treasures beyond imagination.'",
        "choices": [],
        "isEnding": true,
        "endingType": "good"
      }
    }
  }
};