import React, { useState,useEffect } from 'react'

function ChatApp() {

    const lessons = [
        {
            id: 1,
            name: "REACT JS"
        },
        {
            id: 2,
            name: "PYTHON"
        },
        {
            id: 3,
            name: "C#"
        },
        {
            id: 4,
            name: "JAVA"
        },
        {
            id: 5,
            name: "RUBY"
        }
    ]

    const [lessonId, setlessonId] = useState(1);

    useEffect(() => {

        const handleComment = (e) => {
            console.log(e);
        }

        window.addEventListener(`lesson-${lessonId}`,handleComment) // => subscribe 
        
        return () => {
            window.removeEventListener(`lesson-${lessonId}`,handleComment) // => unsubscribe
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                        key={lesson.id}
                        style={{color: lessonId === lesson.id ? "red":"black"}}
                        onClick={() => setlessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChatApp
