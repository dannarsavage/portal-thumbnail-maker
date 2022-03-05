import domtoimage from 'dom-to-image';
import React from 'react';
import Controls from './Controls'
import Thumbnail from './Thumbnail'
import './App.css';

class App extends React.Component {
  /**
   * Constructor that sets up state
   *  - Creates initial text for thumbnail 
   * @param {Object} props  Object containing properties for rendering the component (No props needed)
   */
   constructor(props) {
    super(props);
    this.state = {
      itemTitle: "Item Title",
      itemType: "Item Type",
      showItemType: true,
      isInternalItem: true,
      mapImageSource: undefined
    }
  }

  /**
   * Handles the user toggling whether the item is internal
   */
  toggleIsInternalItem() {
    this.setState({
      isInternalItem: !this.state.isInternalItem,
    });
  }

  /**
   * Handles the user toggling the item type text
   */
  toggleShowitemType() {
    this.setState({
      showItemType: !this.state.showItemType,
    });
  }

  /**
   * Handles the user changing the item title
   * @param {string} titleText  title text 
   */
  handleChangeItemTitleText(titleText) {
    this.setState({
      itemTitle: titleText,
    });
  }

  /**
   * Handles the user changing the item type
   * @param {string} typeText  String representing the item type
   */
  handleChangeItemTypeText(typeText) {
    this.setState({
      itemType: typeText,
    });
  }

  /**
   * Handles the user selecting a map image to use in the thumbnail
   * @param {file} selectedFile  File selected by the user
   */
  handleMapImageSelection(selectedFile) {
    console.log(selectedFile);
    var reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        mapImageSource: reader.result
      });
    }
    reader.readAsDataURL(selectedFile);
  }

  createThumbnailImage() {
    domtoimage.toPng(document.getElementById("Thumbnail"))
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  render() {
    return (
      <div>
        <Controls 
          handleChangeItemTitleText={(event) => this.handleChangeItemTitleText(event.target.value)}
          itemTitle={this.state.itemTitle}
          handleChangeItemTypeText={(event) => this.handleChangeItemTypeText(event.target.value)}
          itemType={this.state.itemType}
          toggleIsInternalItem={() => this.toggleIsInternalItem()}
          isInternalItem={this.state.isInternalItem}
          handleMapImageSelection={(event) => this.handleMapImageSelection(event.target.files[0])}
          createThumbnailImage={() => this.createThumbnailImage()}
        />
        <Thumbnail
          id="Thumbnail"
          itemTitle={this.state.itemTitle}
          itemType={this.state.itemType}
          showItemType={this.state.showItemType}
          isInternalItem={this.state.isInternalItem}
          mapImageSource={this.state.mapImageSource}
        />
      </div>
    );
  }
}
        
export default App;
