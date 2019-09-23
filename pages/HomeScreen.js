/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {Container, Footer, FooterTab, Button, Badge} from 'native-base';

import Mybutton from './components/Mybutton';
// import Mytext from './components/Mytext';
import {openDatabase} from 'react-native-sqlite-storage';
import {Icon} from 'react-native-elements';

var db = openDatabase({name: 'db_fiction.db'});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='fiction'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS fiction', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS fiction(fiction_id INTEGER PRIMARY KEY AUTOINCREMENT, fiction_name VARCHAR(255), fiction_type VARCHAR(255), fiction_author VARCHAR(255), fiction_photo VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }
  state = {
    names: [
      {name: 'Number 1', id: 1},
      {name: 'Number 2', id: 2},
      {name: 'Number 3', id: 3},
      {name: 'Number 4', id: 4},
      {name: 'Number 5', id: 5},
      {name: 'Number 6', id: 6},
      {name: 'Number 7', id: 7},
      {name: 'Number 8', id: 8},
      {name: 'Number 9', id: 9},
      {name: 'Number 10', id: 10},
    ],
  };
  render() {
    return (
      <Container>
        <View>
          <ScrollView>
            <Image
              source={require('../image/index.png')}
              style={{width: 420, height: 200}}
            />
            <Text style={{fontSize: 25, textAlign: 'center'}}>
              Top 10 Fiction
            </Text>
            {this.state.names.map((item, index) => (
              <Text key={item.id} style={styles.item}>
                {item.name}
              </Text>
            ))}
            <Mybutton
              title="Add Fiction"
              customClick={() => this.props.navigation.navigate('Register')}
            />{' '}
            */}
            <Mybutton
              title="Update"
              customClick={() => this.props.navigation.navigate('Update')}
            />
            <Mybutton
              title="View"
              customClick={() => this.props.navigation.navigate('View')}
            />
            <Mybutton
              title="View All"
              customClick={() => this.props.navigation.navigate('ViewAll')}
            />
            <Mybutton
              title="Delete"
              customClick={() => this.props.navigation.navigate('Delete')}
            />
            <Mybutton
              title="Search"
              customClick={() => this.props.navigation.navigate('Search')}
            />
            <Mybutton
              title="All Chapter"
              customClick={() => this.props.navigation.navigate('AllChapter')}
            />
            <Mybutton
              title="Chapter"
              customClick={() => this.props.navigation.navigate('Chapter')}
            />
            <Mybutton
              title="Profile"
              customClick={() => this.props.navigation.navigate('Profile')}
            />
            <Footer>
              <FooterTab>
                <Button
                  badge
                  vertical
                  onPress={() => this.props.navigation.navigate('HomeScreen')}>
                  <Badge>
                    <Text>2</Text>
                  </Badge>
                  <Icon name="home" />
                  <Text>Home</Text>
                </Button>
                <Button
                  vertical
                  onPress={() => this.props.navigation.navigate('View')}>
                  <Icon name="search" />
                  <Text>Search</Text>
                </Button>
                <Button
                  vertical
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <Icon name="edit" />
                  <Text>Write</Text>
                </Button>
                <Button
                  vertical
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  <Icon name="person" />
                  <Text>Phofile</Text>
                </Button>
              </FooterTab>
            </Footer>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
});
