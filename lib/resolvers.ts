import { QueryResolvers, TodoItem } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import {db} from './firebase/db'


const userProfile : TodoItem = {
  id: String(1),
  name: "ukol1",
  description: "blaba"
}


const Query: Required<QueryResolvers<ResolverContext>> = {
  async ukol(_parent, _args, _context, _info){
    const docRef = db.collection('TodoItem').doc('1')
    const doc = await docRef.get()

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //return doc.exists ? (doc.data()! as TodoItem) : userProfile
    if(doc.exists){
      const data = doc.data();
      const graphQLdoc : TodoItem = {
        id: data.id,
        date: (data.date.toDate() as Date).toJSON(),
        name: data.name,
        description: data.description,
        car: (await data.idCar.get()).data(),
        customer: (await data.idCustomer.get()).data()
      }
      console.log(graphQLdoc);
      return graphQLdoc;
    } else {
      return userProfile
    }
  }
}

export default { Query }
