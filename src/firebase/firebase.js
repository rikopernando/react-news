import * as firebase from 'firebase'

const config = {
  apiKey : process.env.FIREBASE_API_KEY,
  authDomain : process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL : process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config); 

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

/*
//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log('child_removed',snapshot.key, snapshot.val())
})

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('child_changed',snapshot.key, snapshot.val())
})

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log('child_added',snapshot.key, snapshot.val())
})
database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 97612348763
})

/*
/*

database.ref('expenses').on('value', (snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })  
    })
    console.log(expenses)
}) 


database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })  
    })
    console.log(expenses)
  }) 
add database
database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 97612348763
})

database.ref('expenses').push({
  description: 'Phone Bill',
  note: '',
  amount: 5900,
  createdAt: 97612348763
})

database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 97612348763
})

database.ref('notes').push({
    title: 'Second note!',
    body: 'This is my second note!'
})
 
const onValueChange = database.ref().on('value', (snapshot) => {
  const val = snapshot.val()
  console.log(`${val.name} is a ${val.jobs.title} at ${val.jobs.company}`)
})

 
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val())
}, (e) => {
  console.log('Error with data fetching:', e)
})

setTimeout(() => {
  database.ref('age').set(20)
}, 3000)

setTimeout(() => {
  database.ref().off()
}, 7000)

setTimeout(() => {
  database.ref('age').set(30)
}, 10500)

 //fetching data
database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val()
    console.log(val)
  })
  .catch((error) => {
    console.log('Error fetching data:', error) 
  })

// create data
database.ref().set({
  name: 'Riko Pernando',
  age: 22,
  jobs: {
    title: 'Sofware Developer',
    company: 'Bareksa'
  },
  isSingle: true,
  location: {
    city: 'Jakarta',
    country: 'Indonesia'
  }
})
.then((resp) => console.log('Success save data!'))
.catch((error) => console.log(error))

// update data
database.ref().update({
  name: 'Riko Pernando',
  age: 23,
  'location/city': 'Lampung',
  'jobs/title': 'Sofware Engineer'
})
.then(() => console.log('Updated data!'))
.catch((error) => console.log('Updated error!', error))

 */

/*
 delete data with null passing
database.ref('isSingle').set(null)

delete data
database.ref('isSingle')
  .remove()
  .then(() => console.log('Remove success'))
  .catch((error) => console.log('Remove failed',error))

 */
 
