import { useState } from 'react'
//import Button from '@mui/material/Button'

const App = () => {
  const [count, setCount] = useState(0)
  const [courseName, setCourseName] = useState<string>('')
  const [day, setDay] = useState<string>('')
  const [startTime, setStartTime] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')
  const [yourCourses, setYourCourses] = useState<string[]>([])

  return (
    <>
      <h1>College Schedule</h1>
      <p>Count: {count}</p>
      <div>
        <h2>Add a course</h2>
        <form>
          <div>
            <label htmlFor="courseName">
              Course Name:
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="day">
              Day:
              <input
                type="text"
                name="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="startTime">
              Start Time:
              <input
                type="text"
                name="startTime"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="endTime">
              End Time:
              <input
                type="text"
                name="endTime"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </label>
          </div>
        </form>
{/* <Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>
<Button variant="outlined" href="#outlined-buttons">
  Link
</Button>       */}
</div>

      <h2>Your Courses</h2>
      <form>
        <div>
          <label htmlFor="courseName">
            Course Name:
            <output>{courseName}</output>
          </label>
        </div>
      </form>
      <ul>
        {yourCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </>
  )
}

export default App;