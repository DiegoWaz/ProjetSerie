import React from "react";
import { View, ActivityIndicator, FlatList } from 'react-native';
import { Card } from 'react-bootstrap';
// import react-native-web, react-art
export default class MovieContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoading: true}
      }

    componentDidMount(){
        fetch('http://localhost:3000/movies', {
            method: 'GET',
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
        }).then(response => response.json())
        .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){
    
            });
        }).catch((error) =>{
            console.error(error);
        });
    }

    render() {
        if(this.state.isLoading){
            return(
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>
            )
        }
    
        return(
            <View style={{flex: 1, paddingTop:20}}>
            <div class="row">
                <div class="card-group">
                <FlatList
                    data={this.state.dataSource}
                    renderItem={
                        ({item}) => 
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                    {item.released}, {item.year}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    }
                    keyExtractor={({id}, index) => id}
                />
                </div>
                </div>
            </View>
        );
    }
}