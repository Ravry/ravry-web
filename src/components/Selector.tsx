import { useEffect, useState } from "react";

export default function Selector() {
    const [cards, setCards] = useState([
        {
            title: "About",
            content: [
                {name: "soon.", url: "", visibility: "", languages: []}
            ]
        },
        {
            title: "Project",
            content: [
                {name: "soon.", url: "", visibility: "", languages: []}
            ]
        },
        {
            title: "Other",
            content: [
                {name: "soon.", url: "", visibility: "", languages: []}
            ]
        }
    ]);
    const [selectedCard, setSelectedCard] = useState(1);

    const username = "ravry";

    const [languageColors, setLanguageColors] = useState<Record<string, { color: string }> | null>(null);

    const openPage = (url: any) => {
        if (url)
            window.open(url,'_blank')?.focus();
    };

    useEffect(() => {
        const fetchColors = async () => {
            const fetchedLanguageColors = await fetch(
                "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
            ).then((res) => res.json());
            setLanguageColors(fetchedLanguageColors);
        };

        fetchColors();

        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                const data = await response.json();
                
                const repoContent = await Promise.all(
                data.map(async (repo: any) => {
                    const langsResponse = await fetch(repo.languages_url);
                    const langsData = await langsResponse.json();
                    return {
                        name: repo.name,
                        url: repo.clone_url,
                        visibility: repo.visibility,
                        languages: Object.keys(langsData),
                    };
                })
                );


                setCards(prevCards => {
                    const updatedCards = [...prevCards];
                    updatedCards[1] = {
                        ...updatedCards[1],
                        content: repoContent,
                    };
                    return updatedCards;
                });
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        };
        fetchRepos();
    }, [username]);

    const getColorForLanguage = (language: string) => {
        if (!languageColors) return "#999999";
        return languageColors[language]?.color || "#999999";
    };

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
                            <div key={i} onClick={() => setSelectedCard(displayIndex)} className={`foreground-2 rounded-4xl flex-grow-1 flex flex-col ${i === 1 ? 'h-90 w-80' : 'h-80 w-70'}` }>
                                <div className="flex flex-row w-full p-2 items-center gap-2">
                                    <div className="p-4 foreground shadow-xl rounded-4xl"><i className="fa-solid fa-arrow-left"></i></div>
                                    <span className="font-bold text-xl">{card.title}</span>
                                </div>

                                <div className="flex flex-col m-2 gap-2 overflow-auto flex-grow-1 p-1 rounded-2xl">
                                    {
                                        card.content.map((content, index) => (
                                            <div onDoubleClick={() => openPage(content.url)} key={index} className="flex flex-col rounded-2xl foreground shadow-xl p-2">
                                                <div className="flex flex-row items-center justify-between">
                                                    <div className="flex flex-row gap-2 items-center justify-center">
                                                        <i className="fa-regular fa-circle"></i>
                                                        <span className="font-bold">{content.name}</span>    
                                                    </div>
                                                    <div className="flex flex-row gap-2 items-center justify-center">
                                                        {content.visibility && content.visibility !== "" && (
                                                            <span className="rounded-lg p-1 px-2 bg-green-800">
                                                                {content.visibility}
                                                            </span>
                                                        )}
                                                        <i className="fa-solid fa-grip-vertical"></i>
                                                    </div>
                                                </div>
                                                {content.languages.length > 0 && <div className="flex flex-row w-full gap-1 overflow-auto mt-2 text-white">
                                                    {content.languages.map((lang) => (
                                                        <span className="rounded-lg p-1 px-2 text-shadow" style={{backgroundColor: getColorForLanguage(lang)}}>{lang}</span>
                                                    ))}
                                                </div>}   
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