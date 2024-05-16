const value = 'React'
const courses=[
    {
        name: "HTML, CSS"
    },
    {
        name: 'React'
    },
    {
        name: 'Java'
    }
]

export const Jsx = (
    <ul className="courseList">
        <li>
            {
                courses.map((course, i) => {
                    return course.name
                })
            }
        </li>
    </ul>
)

const list = <ul className="courseList">
    <li style= {{font:"15px",}} >Ab</li>
    <li>{value}</li>
</ul>