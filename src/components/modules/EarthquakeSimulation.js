import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EarthquakeSimulation = () => {
  const navigate = useNavigate();
  
  // Game state
  const [currentAct, setCurrentAct] = useState(1);
  const [health, setHealth] = useState(100);
  const [points, setPoints] = useState(0);
  const [allies, setAllies] = useState(0);
  const [choices, setChoices] = useState([]);
  const [showChoice, setShowChoice] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  // Story data
  const storyData = {
    1: {
      title: "The First Earthquake",
      visual: "classroom",
      dialogue: "Why is everything shaking all of a sudden? Is it an earthquake? We should all do something or else we will get hurt.",
      choices: [
        {
          text: "Hide under tables and benches",
          consequence: "Hiding under tables and benches will protect you from the rubble if the ceiling happens to fall on you and this is also the safest choice.",
          healthChange: 0,
          pointsChange: 10,
          alliesChange: 0
        },
        {
          text: "Try to leave the school premises",
          consequence: "Trying to leave the school premises under an active earthquake is extremely dangerous and it also increases the risk of injury or can even cause death.",
          healthChange: -30,
          pointsChange: -5,
          alliesChange: 0
        }
      ]
    },
    2: {
      title: "After the Quake",
      visual: "collapsed",
      dialogue: "There may be an aftershock, be careful. Shout for help if you were unable to save yourself from injuries just now",
      info: "Earthquakes are caused when seismic waves cause the ground to shake and they can occur multiple times in an interval.",
      choices: [
        {
          text: "Look for trapped classmates",
          consequence: "Helping others should be your priority after you ensure your own safety first. You have gained allies and now move in a group. You should also beware that another aftershock might bring down the structure.",
          healthChange: -5,
          pointsChange: 15,
          alliesChange: 2
        },
        {
          text: "Rush outside into an open area",
          consequence: "Rushing outside into an open area can cause stampeding crowds. There is also a risk of falling electric wires.",
          healthChange: -15,
          pointsChange: 5,
          alliesChange: 0
        }
      ]
    },
    3: {
      title: "The Aftershock",
      visual: "fire",
      dialogue: "The fire must be due to a gas leak. We must find open ground and wait for help there. Waiting in the building will cause the fire to spread and compromise our escape.",
      choices: [
        {
          text: "Move towards an open ground",
          consequence: "You can avoid further falling debris in an open ground and also set up relief camps there.",
          healthChange: 0,
          pointsChange: 20,
          alliesChange: 1
        },
        {
          text: "Wait for help inside the building",
          consequence: "Waiting for help is not always the correct choice. In situations as drastic as earthquakes one has to take action for their own safety.",
          healthChange: -25,
          pointsChange: -10,
          alliesChange: 0
        }
      ]
    },
    4: {
      title: "Struggle",
      visual: "night",
      dialogue: "It has been a lot of time and I am hoping that the earthquakes will not return. We cannot go back home for now and can only hope for the safety of our family. Let's do what we can in our power to help and get out of this nightmare.",
      choices: [
        {
          text: "Stay in a temporary camp with everyone else",
          consequence: "Knowing when to rest safely is also a surviving skill which is needed. There are times to be a hero and there are times to be safe.",
          healthChange: 10,
          pointsChange: 5,
          alliesChange: 0
        },
        {
          text: "Volunteer with the rescue team",
          consequence: "Help only if you are uninjured yourself and are capable of helping the rescue team. The last thing the rescue team needs is someone who slows them down.",
          healthChange: -10,
          pointsChange: 25,
          alliesChange: 3
        }
      ]
    },
    5: {
      title: "Resolution",
      visual: "rescue",
      dialogue: "Each and every single one of our choices so far have made a difference in the result. Let it be the survival of oneself or others, the struggle we made changed the consequences of this dreadful earthquake. If every single person has such quick thinking and the ability to act on their beliefs they can survive such a calamity easily.",
      isEnd: true
    }
  };

  // Visual components for different scenes
  const renderVisual = (visual) => {
    switch (visual) {
      case 'classroom':
        return (
          <div className="relative w-full h-64 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-bounce">🏫</div>
            </div>
            <div className="absolute top-4 left-4 text-2xl animate-pulse">💡</div>
            <div className="absolute top-4 right-4 text-2xl animate-pulse">💡</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce">👥</div>
            {isShaking && (
              <div className="absolute inset-0 bg-red-500 opacity-20 animate-pulse"></div>
            )}
          </div>
        );
      case 'collapsed':
        return (
          <div className="relative w-full h-64 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🏚️</div>
            </div>
            <div className="absolute top-4 left-4 text-2xl">🚨</div>
            <div className="absolute top-4 right-4 text-2xl">🚨</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl">👥</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-pulse">💨</div>
          </div>
        );
      case 'fire':
        return (
          <div className="relative w-full h-64 bg-gradient-to-b from-orange-400 to-red-600 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-pulse">🔥</div>
            </div>
            <div className="absolute top-4 left-4 text-2xl animate-bounce">🏫</div>
            <div className="absolute top-4 right-4 text-2xl animate-bounce">🏫</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl">👥</div>
            <div className="absolute top-1/2 left-1/4 text-3xl animate-pulse">💥</div>
            <div className="absolute top-1/2 right-1/4 text-3xl animate-pulse">💥</div>
          </div>
        );
      case 'night':
        return (
          <div className="relative w-full h-64 bg-gradient-to-b from-purple-900 to-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🌙</div>
            </div>
            <div className="absolute top-4 left-4 text-2xl animate-pulse">🔥</div>
            <div className="absolute top-4 right-4 text-2xl animate-pulse">🔥</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl">👥</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">⚡</div>
            <div className="absolute bottom-1/4 left-1/4 text-2xl">🏕️</div>
            <div className="absolute bottom-1/4 right-1/4 text-2xl">🏕️</div>
          </div>
        );
      case 'rescue':
        return (
          <div className="relative w-full h-64 bg-gradient-to-b from-blue-400 to-green-500 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-bounce">🚁</div>
            </div>
            <div className="absolute top-4 left-4 text-2xl">🚑</div>
            <div className="absolute top-4 right-4 text-2xl">🚑</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl">👥</div>
            <div className="absolute top-1/2 left-1/4 text-3xl">👨‍⚕️</div>
            <div className="absolute top-1/2 right-1/4 text-3xl">👩‍⚕️</div>
          </div>
        );
      default:
        return <div className="w-full h-64 bg-gray-200 rounded-lg"></div>;
    }
  };

  // Handle choice selection
  const handleChoice = (choiceIndex) => {
    const choice = storyData[currentAct].choices[choiceIndex];
    
    // Update stats
    setHealth(prev => Math.max(0, Math.min(100, prev + choice.healthChange)));
    setPoints(prev => prev + choice.pointsChange);
    setAllies(prev => prev + choice.alliesChange);
    setChoices(prev => [...prev, { act: currentAct, choice: choiceIndex, text: choice.text }]);
    
    setShowResult(true);
    setResultMessage(choice.consequence);
    
    // Move to next act after a delay
    setTimeout(() => {
      setShowResult(false);
      if (currentAct < 5) {
        setCurrentAct(prev => prev + 1);
        setShowChoice(false);
        
        // Add earthquake effect for act 3
        if (currentAct + 1 === 3) {
          setIsShaking(true);
          setTimeout(() => setIsShaking(false), 2000);
        }
      }
    }, 3000);
  };

  // Show choices after dialogue
  useEffect(() => {
    if (currentAct <= 4 && !storyData[currentAct].isEnd) {
      const timer = setTimeout(() => {
        setShowChoice(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentAct]);

  // Calculate final result
  const getFinalResult = () => {
    if (health <= 0) {
      return {
        title: "Tragic Missteps",
        message: "Your reckless choices have cost you your life. Be careful and think about your safety first so that if such situations arise in real life you are prepared to survive them.",
        color: "text-red-600",
        bgColor: "bg-red-50"
      };
    } else if (points >= 50 && allies >= 3) {
      return {
        title: "Community Hero",
        message: "You have helped save multiple lives including yours. The rescue team honors you.",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50"
      };
    } else {
      return {
        title: "Safe Survivor",
        message: "You have successfully survived this calamity. Congratulations!",
        color: "text-green-600",
        bgColor: "bg-green-50"
      };
    }
  };

  // Reset simulation
  const resetSimulation = () => {
    setCurrentAct(1);
    setHealth(100);
    setPoints(0);
    setAllies(0);
    setChoices([]);
    setShowChoice(false);
    setShowResult(false);
    setIsShaking(false);
  };

  const currentStory = storyData[currentAct];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">🌍 Earthquake Simulation</h1>
            <button
              onClick={() => navigate('/student/dashboard')}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="text-sm text-red-600 font-medium">Health</div>
              <div className="text-2xl font-bold text-red-700">{health}%</div>
              <div className="w-full bg-red-200 rounded-full h-2 mt-1">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${health}%` }}
                ></div>
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm text-blue-600 font-medium">Points</div>
              <div className="text-2xl font-bold text-blue-700">{points}</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-green-600 font-medium">Allies</div>
              <div className="text-2xl font-bold text-green-700">{allies}</div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Act {currentAct}: {currentStory.title}
          </h2>
          
          {/* Visual */}
          {renderVisual(currentStory.visual)}
          
          {/* Dialogue */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 text-lg leading-relaxed">
              "{currentStory.dialogue}"
            </p>
          </div>
          
          {/* Important Information */}
          {currentStory.info && (
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700 text-sm">
                <strong>Important Information:</strong> {currentStory.info}
              </p>
            </div>
          )}
        </div>

        {/* Choices */}
        {showChoice && currentStory.choices && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">What do you choose?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStory.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(index)}
                  className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <div className="text-lg font-medium">{choice.text}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result Message */}
        {showResult && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-500">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Consequence:</strong> {resultMessage}
              </p>
            </div>
          </div>
        )}

        {/* Final Result */}
        {currentAct === 5 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Simulation Complete!</h2>
              {(() => {
                const result = getFinalResult();
                return (
                  <div className={`p-6 rounded-lg ${result.bgColor} border-l-4 border-current`}>
                    <h3 className={`text-2xl font-bold ${result.color} mb-4`}>
                      {result.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {result.message}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">Final Health</div>
                        <div className="text-3xl font-bold text-red-600">{health}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">Total Points</div>
                        <div className="text-3xl font-bold text-blue-600">{points}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">Allies Gained</div>
                        <div className="text-3xl font-bold text-green-600">{allies}</div>
                      </div>
                    </div>
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={resetSimulation}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                      >
                        Play Again
                      </button>
                      <button
                        onClick={() => navigate('/student/dashboard')}
                        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                      >
                        Back to Dashboard
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-600">Act {currentAct} of 5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentAct / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthquakeSimulation;