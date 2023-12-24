import React from 'react'
import SideBar from './SideBar';
import Cards from './Card';

function Dashboard2() {
  const cardData = [
    { id: 1, title: 'Card 1', subtitle: 'Subtitle 1', content: 'Content for card 1' },
    { id: 2, title: 'Card 2', subtitle: 'Subtitle 2', content: 'Content for card 2' },
    { id: 3, title: 'Card 3', subtitle: 'Subtitle 3', content: 'Content for card 3' },
    // Add more data as needed
  ];
  return (
    <div>
      <div style={{width:"17rem"}}>
      <SideBar />
      </div>
      <div style={{float:"right"}}>
        <Cards />
      </div>
        {cardData.map((card) => (
        <Cards
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          content={card.content}
        />
      ))}
    </div>
  )
}

export default Dashboard2;