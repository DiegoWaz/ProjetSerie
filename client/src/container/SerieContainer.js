import React from "react";
import { View, ActivityIndicator, FlatList } from 'react-native';
import { Card } from 'react-bootstrap';
// import react-native-web, react-art
export default class SerieContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoading: true}
      }

    componentDidMount(){
        fetch('http://localhost:3000/series', {
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
                <FlatList className="col-md-4"
                    data={this.state.dataSource}
                    renderItem={
                        ({item}) =>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.poster_path}</Card.Text>
                                    <Card.Text>{item.country}</Card.Text>
                                </Card.Body>
                            </Card>
                    }
                    keyExtractor={({id}, index) => id}
                />
                </div>
            </View>
        );
    }
}