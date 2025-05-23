import { useEffect, useState } from "react";

export default function Selector() {
    const [cards, setCards] = useState([
        {
            title: "About",
            content: [
                "None",
            ]
        },
        {
            title: "Projects",
            content: []
        },
        {
            title: "Other",
            content: [
                "None",
            ]
        },
    ]);
    const [selectedCard, setSelectedCard] = useState(1)

    const username = "ravry";

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                const data = await response.json();
                
                const repoNames = data.map((repo: any) => repo["name"]);

                setCards(prevCards => {
                    const updatedCards = [...prevCards];
                    updatedCards[1] = {
                        ...updatedCards[1],
                        content: repoNames,
                    };
                    return updatedCards;
                });
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        };
        fetchRepos();
    }, [username]);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 m-5">
            {
                (() => {
                    const cardElements = [];
                    const totalCards = cards.length;

                    for (let i = 0; i < cards.length; i++) {
                        const displayIndex = (selectedCard + i - 1 + totalCards) % totalCards;
                        const card = cards[displayIndex];
                        
                        cardElements.push(
                            <div onClick={() => setSelectedCard(displayIndex)} className={`foreground-2 rounded-4xl flex-grow-1 flex flex-col ${i === 1 ? 'h-90 w-80' : 'h-80 w-70'}`}>
                                <div className="flex flex-row w-full p-2 items-center gap-2">
                                    <div className="p-4 foreground shadow-xl rounded-4xl"><i className="fa-solid fa-arrow-left"></i></div>
                                    <span className="font-bold text-xl">{card.title}</span>
                                </div>

                                <div className="flex flex-col m-2 gap-2 overflow-auto flex-grow-1 p-1 rounded-2xl">
                                    {
                                        card.content.map((content) => (
                                            <div className="flex flex-row items-center justify-between p-2 rounded-2xl foreground">
                                                <div className="flex flex-row gap-2 items-center ">
                                                    <i className="fa-regular fa-circle"></i>
                                                    <p>{content}</p>    
                                                </div>
                                                <i className="fa-solid fa-grip-vertical"></i>   
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                    return cardElements;
                })()
            }
        </div>
    );
}