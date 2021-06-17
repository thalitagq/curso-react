import Head from 'next/head'
import {Fragment} from 'react'
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta 
          name="description"
          content="Browse a list of React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

//SERVER SIDE RENDERING
// export async function getServerSideProps(context){
//   const req = context.req
//   const res = context.res

//   //fetch data from an API

//   return {
//     props: {
//       meetups: DUMMT_MEETUPS
//     }
//   }
// }

//STATIC GENERATION
//is executed before the home component (build process)
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://thalita:123123123@sandbox.eovzz.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetusCollection = db.collection("meetups");

  const meetups = await meetusCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
