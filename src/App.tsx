import { useState } from 'react'
import Button from '@mui/material/Button'
type Course = {
  courseName: string
  day: string
  startTime: string
  endTime: string
}

const App = () => {
  const [count, setCount] = useState(0)
  const [courseName, setCourseName] = useState<string>('')
  const [day, setDay] = useState<string>('')
  const [startTime, setStartTime] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')
  const [yourCourses, setYourCourses] = useState<Course[]>([])
  const [inputText, setInputText] = useState<string>('')
  const [outputText, setOutputText] = useState<string>('')
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  // const handleButtonClick = () => {
  //   setOutputText(inputText);
  // };
  const handleAddCourse = (e: React.SubmitEvent<HTMLFormElement>) => { 
    e.preventDefault();
    console.log('Course Name:', courseName);
    console.log('Day:', day);
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    const newCourse: Course = {
      courseName,
      day,
      startTime,
      endTime
    }
    setYourCourses(prev => [...prev, newCourse])
  }


  return (
    <>
      <h1>College Schedule</h1>
      <p>Count: {count}</p>
      <div>
        <h2>Add a course</h2>
        <form onSubmit={handleAddCourse}>
          <div>
            <label htmlFor="courseName">
              Course Name:
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Enter course name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="courseDay">
             Day:
              <select
                id="courseDay"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="">Select a day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="startTime">
              Start Time:
              <select
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              >
                <option value="">Select a start time</option>
                <option value="8:00">8:00 AM</option>
                <option value="8:30">8:30 AM</option>
                <option value="9:00">9:00 AM</option>
                <option value="9:30">9:30 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="13:30">1:30 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="14:30">2:30 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="15:30">3:30 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="16:30">4:30 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="21:30">9:30 PM</option>
                <option value="22:00">10:00 PM</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="endTime">
              End Time:
              <select
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              >
                <option value="">Select an end time</option>
                <option value="8:00">8:00 AM</option>
                <option value="8:30">8:30 AM</option>
                <option value="9:00">9:00 AM</option>
                <option value="9:30">9:30 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="13:30">1:30 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="14:30">2:30 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="15:30">3:30 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="16:30">4:30 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="21:30">9:30 PM</option>
                <option value="22:00">10:00 PM</option>
              </select>
            </label>
          </div>
          <Button variant="contained" type="submit">
            Add +
          </Button>
        </form>
   
</div>

      <h2>Your Courses</h2>
      <div>
        <div>
        </div>
      </div>
      <ul>
        {yourCourses.map((course, index) => (
          <li key={index}>
            <strong>{course.courseName}</strong> - {course.day} from {course.startTime} to {course.endTime}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;