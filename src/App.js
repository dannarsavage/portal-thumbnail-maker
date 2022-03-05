import domtoimage from 'dom-to-image';
import React from 'react';
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
      itemTitle: "Item Title New",
      itemType: "Item Type",
      showItemType: true,
      isInternalItem: true
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
          createThumbnailImage={() => this.createThumbnailImage()}
        />
        <Thumbnail
          id="Thumbnail"
          itemTitle={this.state.itemTitle}
          itemType={this.state.itemType}
          showItemType={this.state.showItemType}
          isInternalItem={this.state.isInternalItem}
        />
      </div>
    );
  }
}

/**
 * React function component for rendering the Portal item thumbnail
 * @param {object} props Object containing properties necessary for rendering 
 *    Required properties:
        - itemTitle: Item Title
        - itemType: Item Type ("Map Image Layer", "Web Map", etc...)
        - showItemType: Boolean indicating whether to display the item type
        - isInternalItem: Boolean indicating whether this item is internal or public
        - createThumbnailImage: Function for creating the thumbnail image
 * @returns Rendered thumbnail
 */
function Controls(props) {
  return (
    <div className="Controls">
      <label htmlFor="ItemName">Item Name:</label> 
      <input
        type="text"
        key="ItemName"
        name="ItemName"
        onChange={props.handleChangeItemTitleText}
        placeholder={props.itemTitle}
      />
      <br />
      <label htmlFor="ItemType">Item Type:</label>
      <select 
        name="ItemType" 
        key="ItemType"
        id="ItemType"
        onChange={props.handleChangeItemTypeText}
        placeholder={props.itemType}
        >
        <option value="Map Image Layer">Map Image Layer</option>
        <option value="Feature Layer">Feature Layer</option>
        <option value="Layer">Layer</option>
      </select>
      <br />
      <label htmlFor="IsInternal">Internal?</label> 
      <input
        type="checkbox"
        onChange={props.toggleIsInternalItem}
        key="IsInternal"
        name="IsInternal"
        checked={props.isInternalItem}
      />
      <button
        onClick={props.createThumbnailImage}
      >Create Image!</button>
    </div>
  );
}


/**
 * React function component for rendering the Portal item thumbnail
 * @param {object} props Object containing properties necessary for rendering 
 *    Required properties:
        - itemTitle: Item Title
        - itemType: Item Type ("Map Image Layer", "Web Map", etc...)
        - showItemType: Boolean indicating whether to display the item type
        - isInternalItem: Boolean indicating whether this item is internal or public
 * @returns Rendered thumbnail
 */
        function Thumbnail(props) {
          const thumbnailClassName = props.isInternalItem ? "Thumbnail Thumbnail-internal" : "Thumbnail Thumbnail-public";
          return (
            <div className={thumbnailClassName} id={props.id}>
              <div className="Graphic"></div>
              <div className="Internal-text">Internal</div>
              <div className="Item-title-text">{props.itemTitle}</div>
              <div className="Item-type-text">{props.itemType}</div>
              <img src="./logo512.png" className="Logo" alt="logo" />
            </div>
          );
        }
        
export default App;
