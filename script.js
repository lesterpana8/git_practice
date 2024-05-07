const zodiacSigns = {
    Aquarius: 'Your zodiac sign is Aquarius',
    Pisces: 'Your zodiac sign is Pisces',
    Aries: 'Your zodiac sign is Aries',
    Taurus: 'Your zodiac sign is Taurus',
    Gemini: 'Your zodiac sign is Gemini',
    Cancer: 'Your zodiac sign is Cancer',
    Leo: 'Your zodiac sign is Leo',
    Virgo: 'Your zodiac sign is Virgo',
    Libra: 'Your zodiac sign is Libra',
    Scorpio: 'Your zodiac sign is Scorpio',
    Sagittarius: 'Your zodiac sign is Sagittarius',
    Capricorn: 'Your zodiac sign is Capricorn'
};

const horoscope = [
    "Career Advancement: An opportunity for career growth is approaching. Be ready to step up and take on new responsibilities.",
    "Romantic Renewal: Your relationship is about to enter a phase of renewed passion. Rekindle the spark with a thoughtful gesture or surprise outing.",
    "Financial Stability: Financial challenges are settling down. Use this time to create a budget and start saving for the future.",
    "Health Improvement: Pay attention to your health. Small changes in diet and exercise can lead to significant benefits.",
    "Travel Opportunities: A chance to travel is on the horizon. Whether it's a weekend getaway or an international adventure, embrace the experience.",
    "Family Bonds: Strengthen your family connections by spending quality time with loved ones. A family gathering could bring you joy and comfort.",
    "Creative Inspiration: Your creativity is at an all-time high. Use this energy to start a new project or revisit an old hobby.",
    "Community Involvement: Engage with your community through volunteering or participating in local events. It's a great way to build new connections.",
    "Learning and Growth: Consider taking a course or attending a workshop. Learning something new can be enriching and fulfilling.",
    "Emotional Healing: Allow yourself time to heal from past emotional wounds. It's okay to let go of what no longer serves you.",
    "Friendship Connections: Reconnect with old friends or make new ones. Friendships bring support and happiness into your life.",
    "Home Improvement: Make changes to your living space to create a more comfortable and inviting environment.",
    "Career Collaboration: Collaborate with colleagues on a new project. Teamwork could lead to unexpected success.",
    "Romantic Exploration: If you're single, a new romantic interest might be just around the corner. Be open to meeting new people.",
    "Financial Windfall: An unexpected financial gain could be coming your way. Use it wisely to secure your future.",
    "Health and Well-being: Focus on holistic health practices like meditation or yoga. They can help you find balance and inner peace.",
    "Travel with Purpose: Plan a trip that involves learning or cultural exploration. It will be a rewarding experience.",
    "Personal Fulfillment: Engage in activities that bring you joy and fulfillment. It's important to nurture your passions.",
    "Family Reconnection: Reconnect with distant relatives or resolve family conflicts. Family ties are invaluable.",
    "Self-Reflection: Take time for self-reflection and introspection. It can lead to personal growth and a deeper understanding of yourself."
];

const color = [
    'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'
];

const getZodiacSign = (month, date) => {
    if(month === 'January' && date >= 21 || month === 'February' && date <= 19){
        return zodiacSigns.Aquarius;
    } else if(month === 'February' && date >= 20 || month === 'March' && date <= 20){
        return zodiacSigns.Pisces;
    } else if(month === 'March' && date >= 21 || month === 'April' && date <= 20){
        return zodiacSigns.Aries;
    } else if(month === 'April' && date >= 21 || month === 'May' && date <= 21){
        return zodiacSigns.Taurus;
    } else if(month === 'May' && date >= 22 || month === 'June' && date <= 21){
        return zodiacSigns.Gemini;
    } else if(month === 'June' && date >= 22 || month === 'July' && date <= 23){
        return zodiacSigns.Cancer;
    } else if(month === 'July' && date >= 24 || month === 'August' && date <= 23){
        return zodiacSigns.Leo;
    } else if(month === 'August' && date >= 24 || month === 'September' && date <= 23){
        return zodiacSigns.Virgo;
    } else if(month === 'September' && date >= 24 || month === 'October' && date <= 23){
        return zodiacSigns.Libra;
    } else if(month === 'October' && date >= 24 || month === 'November' && date <= 22){
        return zodiacSigns.Scorpio;
    } else if(month === 'November' && date >= 23 || month === 'December' && date <= 21){
        return zodiacSigns.Sagittarius;
    } else if(month === 'December' && date >= 22 || month === 'January' && date <= 20) {
         return zodiacSigns.Capricorn;
    }
}

let horoscopes = horoscope[(Math.floor(Math.random() * horoscope.length))];
let colors = color[(Math.floor(Math.random() * color.length))];
let number = Math.floor(Math.random() * 100);


console.log('Your Daily Horoscope!');
console.log(getZodiacSign('October', 17));
console.log(horoscopes);
console.log(`Your Lucky Color for today is: ${colors}`);
console.log(`Your Lucky Number for today is: ${number}`);