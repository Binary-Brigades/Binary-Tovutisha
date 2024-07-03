import Card from './ImpactCard'
const SchoolEvents = [{
        title: 'GreenField HighSchool',
      
    image: '/Academy.jpeg',
    content: 'Thanks to Tovutisha, our new website has revolutionized how we communicate with students and parents. Engagement has skyrocketed, and our online resources are now more accessible than ever. Investing in a modern, user-friendly website is crucial for any school aiming to enhance communication and streamline administrative processes.Join us in making our school greener! On Tree Planting Day, students and staff come together to plant trees around the campus, promoting environmental stewardship and enhancing our green spaces. This initiative not only beautifies our surroundings but also contributes to a healthier ecosystem and provides hands-on learning experiences about the importance of trees and conservation. Participants will learn about different tree species, proper planting techniques, and the long-term benefits of trees, such as improving air quality, providing habitats for wildlife, and combating climate change. Lets work together to create a sustainable future and foster a sense of responsibility towards our environment.'
},
    {
        title: 'Maple Grove Academy',
       
    image: '/Academy.jpeg',
    content: 'Thanks to Tovutisha, our new website has revolutionized how we communicate with students and parents. Engagement has skyrocketed, and our online resources are now more accessible than ever. Investing in a modern, user-friendly website is crucial for any school aiming to enhance communication and streamline administrative processes.Join us in making our school greener! On Tree Planting Day, students and staff come together to plant trees around the campus, promoting environmental stewardship and enhancing our green spaces. This initiative not only beautifies our surroundings but also contributes to a healthier ecosystem and provides hands-on learning experiences about the importance of trees and conservation. Participants will learn about different tree species, proper planting techniques, and the long-term benefits of trees, such as improving air quality, providing habitats for wildlife, and combating climate change. Lets work together to create a sustainable future and foster a sense of responsibility towards our environment.'
    },
    {
        title: 'Hilltop International',
       
    image: '/Academy.jpeg',
    content: 'Thanks to Tovutisha, our new website has revolutionized how we communicate with students and parents. Engagement has skyrocketed, and our online resources are now more accessible than ever. Investing in a modern, user-friendly website is crucial for any school aiming to enhance communication and streamline administrative processes.Join us in making our school greener! On Tree Planting Day, students and staff come together to plant trees around the campus, promoting environmental stewardship and enhancing our green spaces. This initiative not only beautifies our surroundings but also contributes to a healthier ecosystem and provides hands-on learning experiences about the importance of trees and conservation. Participants will learn about different tree species, proper planting techniques, and the long-term benefits of trees, such as improving air quality, providing habitats for wildlife, and combating climate change. Lets work together to create a sustainable future and foster a sense of responsibility towards our environment.'
   
},
]

export default function Activities() {
    return (
         <div className="px-4 lg:px-16">
            <h3 className="text-xl font-semibold mt-3">Impacts and Insights</h3>
            {SchoolEvents.map((Event, index) => (
                <Card key={index} title={Event.title}  image={Event.image} content={Event.content} />
            ))}
        </div>
    )
}