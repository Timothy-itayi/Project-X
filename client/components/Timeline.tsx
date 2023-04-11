import React from 'react'

interface TimelineProps {
  duration: number
  currentTime: number
  onTimelineSeek: (time: number) => void
}

const Timeline: React.FC<TimelineProps> = ({
  duration,
  currentTime,
  onTimelineSeek,
}) => {
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Calculate the seek time based on the click position
    const timelineRect = e.currentTarget.getBoundingClientRect()
    const timelineWidth = timelineRect.width
    const clickX = e.clientX - timelineRect.left
    const seekTime = (clickX / timelineWidth) * duration

    // Call the onTimelineSeek callback with the seek time
    onTimelineSeek(seekTime)
  }

  return (
    <div className="timeline" onClick={handleTimelineClick}>
      <div
        className="timeline-progress"
        style={{ width: `${(currentTime / duration) * 100}%` }}
      />
    </div>
  )
}

export default Timeline
