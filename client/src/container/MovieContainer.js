import React from "react";
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
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
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title}, {item.released}, {item.year}</Text>}
                keyExtractor={({id}, index) => id}
            />
            </View>
        );
    }
}