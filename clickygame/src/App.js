import React, {Component} from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Jumbo from './components/Jumbo/Jumbo'
import Images from './components/Images/Image';
import GameSpace from './components/GameSpace/GameSpace';

class App extends Component {
    
    state = {
        image: [
            {
                id: 1,
                image: "http://image-cdn.neatoshop.com/styleimg/62796/none/kiwigreen/default/361729-19;1512463610i.jpg",
                clicked: false
            },
            {id: 2, image: "https://www.geek.com/wp-content/uploads/2016/05/squanching.jpg", clicked: false},
            {
                id: 3,
                image: "https://vignette.wikia.nocookie.net/rickandmorty/images/0/08/Tammy.png/revision/latest?cb=20140523063749",
                clicked: false
            },
            {
                id: 4,
                image: "https://vignette.wikia.nocookie.net/rickandmorty/images/b/bd/Shut_Up_Hamurai.png/revision/latest?cb=20170131022414",
                clicked: false
            },
            {
                id: 5,
                image: "https://vignette.wikia.nocookie.net/rickandmorty/images/d/d2/Rick_D99.png/revision/latest?cb=20170402053917",
                clicked: false
            },
            {
                id: 6,
                image: "https://vignette.wikia.nocookie.net/rickandmorty/images/8/84/Fart.jpg/revision/latest?cb=20150806021947",
                clicked: false
            },
            {id: 7, image: "http://static.tvtropes.org/pmwiki/pub/images/snuffles_helmet.jpg", clicked: false},
            {
                id: 8,
                image: "http://cdn.smosh.com/sites/default/files/2017/09/mr%20poopy%20butthole.jpg",
                clicked: false
            },
            {id: 9, image: "http://www.rickandmortyshow.com/wp-content/uploads/2016/07/summer2.jpg", clicked: false},
            {
                id: 10,
                image: "https://thoughtcatalog.files.wordpress.com/2017/11/rick-sanchez-and-morty-adult-swim.jpg?w=590&h=383",
                clicked: false
            },
            {id: 11, image: "http://static.tvtropes.org/pmwiki/pub/images/i2h2pgn.png", clicked: false},
            {id: 12, image: "http://static.tvtropes.org/pmwiki/pub/images/13_1.jpg", clicked: false}
        ],
        counter: 0,
        topScore: 0
    };
    
    sortImages = (id, clicked) => {
        
        const imageOrder = this.state.image;
        
        //need to reference the image in the forEach and not the imageOrder array
        
        if (clicked) {
            console.log("true");
            imageOrder.forEach((img, index) => {
                // console.log(imageOrder[index].clicked);
                imageOrder[index].clicked = false;
                // console.log(imageOrder[index].clicked);
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                topScore: this.state.counter,
                counter: 0
            })
        }
        else {
            console.log("false");
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    // console.log(index);
                    // console.log(image);
                    // console.log(imageOrder[index].clicked);
                    // console.log(imageOrder[index].image);
                    // console.log(imageOrder[index].id);
                    imageOrder[index].clicked = true;
                    // console.log(imageOrder[index].clicked);
                }
            });
            return this.setState({image: imageOrder.sort(() => Math.random() - 0.5), counter: this.state.counter + 1})
        }
    };
    
    render() {
        return (
            <Wrapper>
                <Header
                    score={this.state.counter}
                    topScore={this.state.topScore}
                />
                <Jumbo/>
                <GameSpace>
                    {this.state.image.map(image => (
                        <Images
                            key={image.id}
                            sortImages={this.sortImages}
                            id={image.id}
                            src={image.image}
                            clicked={image.clicked}
                        />
                    ))}
                </GameSpace>
                <Footer/>
            </Wrapper>
        );
    }
}

export default App;