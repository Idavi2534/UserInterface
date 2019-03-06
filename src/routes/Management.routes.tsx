import React from 'react'
import { Route } from 'react-router';
import clickerContainer from '../components/clicker/clicker.container';
import ManageComponent from '../components/manage/manage.container';
import  ProtectedRoute  from '../components/protected-route.component/protected-route.component';
import  LoginComponent  from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import ProfileContainer from '../components/profile/profile.container';



export class ManagementRoutes extends React.Component<any, any> {
    constructor(props){
        super(props)
    }

    render() {

        return (
            <>
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/clicker" component={clickerContainer} />
            <ProtectedRoute allowedRoles={['admin', 'staging-manager', 'trainer']} path="/manage/:manage" component={ManageComponent} />
            <Route component={HomeComponent} />
            </>


        )


    }
}