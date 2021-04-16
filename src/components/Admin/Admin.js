import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CustomerHeader from '../Customer/CustomerHeader/CustomerHeader';
import AddService from './AddService/AddService';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ServiceList from './ServiceList/ServiceList';

const Admin = () => {
    const {path} = useRouteMatch();


    // Buggy Code =============== Will fix later ===============
    // const {currentUser} = useContext(AuthContext);
    // let history = useHistory();
    // const [data, setData] = useEffect([]);

    // useEffect(()=>{
    //     console.log(data.email)
    //     console.log(currentUser.email)
    //     if(data.email !== currentUser.email){
    //         history.push('/')
    //         console.log("You are not admin")        
    //     }
    // },[data])

    // useEffect(()=>{
    //     const api = 'https://fast-depths-25443.herokuapp.com/getAdmin'
    //     fetch(api)
    //     .then(res => res.json())
    //     .then(async data =>{
    //         try {
    //         await data;
    //         const adminEmail = await data.email;
    //         console.log(adminEmail)
    //         if(adminEmail !== currentUser.email){
    //             history.push('/')
    //             console.log("You are not admin")        
    //         }
                
    //         } catch (err) {
    //             console.log(err);
    //         }
            
    //     })
    //     .catch(err => console.log(err))
    // },[]) =================================
    return (
        <div className="container">
            

            <div className="row">
                <CustomerHeader></CustomerHeader>
                <AdminSidebar></AdminSidebar>
                <div className="col-md-9">
                    <Switch>
                        <Route path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/add-service`}>
                            <AddService></AddService>
                        </Route>
                        <Route path={`${path}`}>
                            <ServiceList></ServiceList>
                        </Route>
                    </Switch>
                </div>
            </div>
        
            
        </div>
    );
};

export default Admin;