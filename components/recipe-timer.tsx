'use client';

import React, { useState, useEffect, useRef } from "react"
import { 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Bell
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

interface RecipeTimerProps {
  label?: string
  minutes?: number
  seconds?: number
  onComplete?: () => void
  className?: string
}

export function RecipeTimer({ 
  label = "Timer", 
  minutes = 0, 
  seconds = 0, 
  onComplete, 
  className 
}: RecipeTimerProps) {
  // Convert initial time to seconds
  const initialSeconds = (minutes * 60) + seconds
  const [timeLeft, setTimeLeft] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isExpanded, setIsExpanded] = useState(true)
  const [progressWidth, setProgressWidth] = useState(100)
  
  // Audio refs
  const tickSound = useRef<HTMLAudioElement | null>(null)
  const alarmSound = useRef<HTMLAudioElement | null>(null)
  
  // Timer interval ref
  const timerInterval = useRef<NodeJS.Timeout | null>(null)
  
  // Initialize audio elements on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      tickSound.current = new Audio('/sounds/tick.mp3') // These would need to be added to the public folder
      tickSound.current.volume = 0.3
      
      alarmSound.current = new Audio('/sounds/alarm.mp3')
      alarmSound.current.volume = 0.7
    }
    
    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current)
      }
    }
  }, [])
  
  // Update progress width when time changes
  useEffect(() => {
    if (initialSeconds > 0) {
      setProgressWidth((timeLeft / initialSeconds) * 100)
    }
  }, [timeLeft, initialSeconds])
  
  // Format time as MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  
  // Start the timer
  const startTimer = () => {
    if (timeLeft <= 0) return
    
    setIsRunning(true)
    
    timerInterval.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval.current as NodeJS.Timeout)
          setIsRunning(false)
          
          if (soundEnabled && alarmSound.current) {
            alarmSound.current.play()
          }
          
          if (onComplete) {
            onComplete()
          }
          
          return 0
        }
        
        // Play tick sound every second if enabled
        if (soundEnabled && tickSound.current && prev % 5 === 0) {
          tickSound.current.play()
        }
        
        return prev - 1
      })
    }, 1000)
  }
  
  // Pause the timer
  const pauseTimer = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current)
    }
    setIsRunning(false)
  }
  
  // Reset the timer
  const resetTimer = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current)
    }
    setTimeLeft(initialSeconds)
    setIsRunning(false)
  }
  
  // Toggle sound
  const toggleSound = () => {
    setSoundEnabled(!soundEnabled)
  }
  
  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 shadow-md ${className}`}>
      {/* Timer Header */}
      <div 
        className="bg-bubblegum-pink text-white py-3 px-4 flex justify-between items-center cursor-pointer"
        onClick={toggleExpanded}
      >
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5" />
          <span className="font-display text-lg">{label}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-white hover:text-white hover:bg-white/20 focus:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              toggleSound()
            }}
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-200 w-full">
        <div 
          className="h-full bg-bubblegum-pink transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      
      {isExpanded && (
        <>
          <CardContent className="pt-6 pb-4 px-6">
            <div className="flex flex-col items-center">
              {/* Timer display */}
              <div className="text-5xl font-display text-deep-purple mb-4 relative">
                {formatTime(timeLeft)}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-bright-yellow/20 animate-pulse"></div>
                <div className="absolute -bottom-1 -left-3 w-6 h-6 rounded-full bg-bubblegum-pink/20 animate-pulse"></div>
              </div>
              
              {/* Time adjustment slider */}
              <div className="w-full mb-6">
                <Slider
                  value={[timeLeft]}
                  min={0}
                  max={initialSeconds > 0 ? initialSeconds * 2 : 300} // Allow setting up to double the initial time
                  step={5}
                  disabled={isRunning}
                  onValueChange={(value: number[]) => setTimeLeft(value[0])}
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="pt-0 pb-4 px-6 flex justify-center gap-3">
            {!isRunning ? (
              <Button 
                onClick={startTimer}
                disabled={timeLeft <= 0}
                className="bg-lime-green hover:bg-lime-green/90 text-white rounded-full"
              >
                <Play className="h-4 w-4 mr-1" />
                Start
              </Button>
            ) : (
              <Button 
                onClick={pauseTimer}
                className="bg-warm-orange hover:bg-warm-orange/90 text-white rounded-full"
              >
                <Pause className="h-4 w-4 mr-1" />
                Pause
              </Button>
            )}
            
            <Button 
              variant="outline"
              onClick={resetTimer}
              className="border-deep-purple/30 text-deep-purple hover:bg-deep-purple/5 rounded-full"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  )
} 