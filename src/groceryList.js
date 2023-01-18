import { Component } from 'react';
import icon from './icon.png';

export class GroceryList extends Component {
        constructor(){
            super();

        this.state = {
           userInput: "",
           groseryList: []
        }
    }

        onChangeEvent(e) {
            this.setState({userInput: e})
            console.log(e)
        }

        addItem(input) {
            if(input===''){
                alert('nothing to add')
            }
            else{
                let listArray = this.state.groseryList;
                listArray.push(input);
                this.setState({groseryList: listArray, userInput: ''})
                console.log(listArray)
            }
        }

        crossWord(event){
            const li = event.target;
            li.classList.toggle('crossed');
        }

        deleteItem(){
            let listArray = this.state.groseryList;
            listArray = [];
            this.setState({groseryList: listArray});
        }

        onFormSubmit(e){
            e.preventDefault();
        }

        render() {
            return(
                <div>

                    <form onSubmit = {this.onFormSubmit}>

                    <div className='center'>
                        <input type = 'text'
                        placeholder = 'What do you want to buy today'
                        onChange = { (e) => {this.onChangeEvent (e.target.value)} }
                        value={this.state.userInput}/>
                    </div>

                    <div className='center'> 
                        <button onClick ={()=>this.addItem(this.state.userInput)}>Add</button>
                    </div>

                    <div>
                        <ul>
                            {this.state.groseryList.map((item, index) =>(
                                <li onClick={this.crossWord} key={index}><img src={icon} alt='ico' width='40px'/>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='center'>
                        <button onClick = {()=>this.deleteItem()}>DELETE</button>
                    </div>

                    </form>

                </div>
            )
        }
    }
