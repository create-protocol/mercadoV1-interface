import supabase from "";
import {v4 as uuidv4} from "uuid";
const nonceApi= async (req,res) =>{

    const {walletAddr}=req.body;
    const nonce=uuidv4();

    let {data ,error}=await supabase.
    from('users').
    select('nonce').
    eq('walletAddr',walletAddr).
    single();

    if(data){
        // new nonce
        console.log('user exist');
    }
    else{
        // create record + nonce
         let {data,error} =await supabase.from('users').insert({nonce,walletAddr});
    }
    
    console.log(data);

    if(error){
        res.status(400).json({error:error.message});
    }
    else{
        res.status(200).json({nonce})
    }
}