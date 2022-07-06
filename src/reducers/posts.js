export default (posts=[],action)=>{

    switch(action.type)
    {
        case 'DELETE':
            console.log("DELETEEEEEEEEE");
            return posts.filter((post) => post._id !== action.payload);
            case 'UPDATE':
            case 'LIKE':
            case 'DISLIKE':
                    return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
             case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts,action.payload];
        default:
            return posts   ;
    }


}