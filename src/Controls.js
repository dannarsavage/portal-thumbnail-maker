/**
 * React function component for rendering the Portal item thumbnail
 * @param {object} props Object containing properties necessary for rendering 
 *    Required properties:
        - itemTitle: Item Title
        - itemType: Item Type ("Map Image Layer", "Web Map", etc...)
        - showItemType: Boolean indicating whether to display the item type
        - isInternalItem: Boolean indicating whether this item is internal or public
        - handleMapImageSelection: Function for handling when the user selects a map image to use in the thumbnail
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
        defaultValue=''
        >
        <option disabled hidden value=''></option>
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
      <label htmlFor="IsInternal">Browse for map image
      <input 
        type="file" 
        id="FileToUpload" 
        name="FileToUpload"
        onChange={props.handleMapImageSelection} />
      </label> 
      <button
        onClick={props.createThumbnailImage}
      >Create Image!</button>
    </div>
  );
}

export default Controls;