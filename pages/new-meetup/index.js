// domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage() {
    const addMeetupHander = (meetupData) => {
        console.log(meetupData);

    };
    return <NewMeetupForm onAddMeetup={addMeetupHander} />;
}

export default NewMeetupPage;
