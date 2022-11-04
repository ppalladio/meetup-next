import MeetupList from '../components/meetups/MeetupList';
const dummy = [
    {
        id: '1',
        name: 'meetup1',
        image: 'https://images.pexels.com/photos/13756268/pexels-photo-13756268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address: 'Consequuntur obcaecati sit aliquam nulla. Voluptatibus ',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    },
    {
        id: '2',
        name: 'meetup2',
        image: 'https://images.pexels.com/photos/13756268/pexels-photo-13756268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        address: 'reprehenderit inventore omnis rem molestiae dolor dolorum,  ',
        description:
            'laudantium soluta quia cumque, neque, eos fugiat repudiandae commodi.',
    },
];

function HomePage() {
    return <MeetupList meetups={dummy} />;
}

export default HomePage;
