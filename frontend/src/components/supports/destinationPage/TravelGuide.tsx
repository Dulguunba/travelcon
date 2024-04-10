import React from 'react'
import { GuideCard } from './GuideCard'

export const TravelGuide = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-white'>
                <div className='flex max-w-[1520px] w-[90%] py-5 flex-col gap-[80px]'>
                    <div className='flex w-full justify-between flex-col'>
                        <GuideCard No='01.' detail="Welcome to the land of the eternal blue sky, where the spirit of the nomad roams free. Join me on a voyage through Mongolia's vast steppes, where every horizon holds the promise of adventure. From sharing stories around the campfire with nomadic families to galloping across open plains on horseback, I'll be your guide to experiencing the true essence of Mongolia. Let's embark on a journey where the soul finds solace in the boundless expanse of the steppe!" img="https://images.surferseo.art/3b811463-700c-41c4-b67d-def8354ce87b.png" name="Into the Heart of the Steppe: A Nomadic Adventure in Mongolia" />
                        <GuideCard No='02.' detail="Venture into the heart of the Gobi Desert, where ancient secrets are whispered by the shifting sands. Join me as we journey through this otherworldly landscape, encountering towering cliffs, hidden oases, and the resilient wildlife that call this desert home. From camel treks across vast dunes to camping beneath a blanket of stars, I'll be your companion on an odyssey through one of the world's most captivating deserts. Let's unlock the mysteries of the Gobi together!" img="https://img.freepik.com/premium-photo/sand-dunes-during-sunset-gobi-desert-mongolia_180392-313.jpg" name="Unveiling the Secrets of the Gobi: A Desert Odyssey" />
                        <GuideCard No='03.' detail="Discover the hidden treasures of Mongolia's vast steppe, where tranquility reigns supreme. Join me as we journey through verdant valleys, crystal-clear lakes, and endless grasslands teeming with life. From meditative hikes through pristine wilderness to encounters with nomadic herders amidst their grazing livestock, I'll be your guide to experiencing the peace and beauty of Mongolia's natural landscapes. Let's escape the chaos of modern life and find solace in the serenity of the steppe!" img="https://news.mn/en/wp-content/uploads/sites/3/2021/01/A4979CE1-897A-485B-9034-6FC045EC4C6B.jpeg" name="Embracing Nomadic Hospitality: A Cultural Immersion in Mongolia" />
                    </div>
                </div>
            </div>
        </>
    )
}