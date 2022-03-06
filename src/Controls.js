import "./Controls.css"

/**
 * React function component for rendering the Portal item thumbnail
 * @param {object} props Object containing properties necessary for rendering 
 *    Required properties:
 *      - id: id to identify & style the parent div
        - itemTitle: Item Title
        - itemType: Item Type ("Map Image Layer", "Web Map", etc...)
        - showItemType: Boolean indicating whether to display the item type
        - isInternalItem: Boolean indicating whether this item is internal or public
        - handleMapImageSelection: Function for handling when the user selects a map image to use in the thumbnail
        - createThumbnailImage: Function for creating the thumbnail image
        - handleWebMapUrlChange: Function for handling web map URLs
        - webMapUrl: Current web map URL
 * @returns Rendered thumbnail
 */
function Controls(props) {
  return (
    <div id={props.id} className="Controls">
      <label htmlFor="ItemName">Item Name:</label> 
      <input
        type="text"
        key="ItemName"
        name="ItemName"
        onChange={props.handleChangeItemTitleText}
        placeholder={props.itemTitle}
      />
      <br />
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
      <br />
      <label htmlFor="IsInternal">Internal?</label> 
      <input
        type="checkbox"
        onChange={props.toggleIsInternalItem}
        key="IsInternal"
        name="IsInternal"
        checked={props.isInternalItem}
      />
      <br />
      <br />
      <label htmlFor="IsInternal">Pick main graphic image or web map
      <input 
        type="file" 
        id="FileToUpload" 
        name="FileToUpload"
        onChange={props.handleMapImageSelection}/>
      <input
        type="text"
        id="WebMapUrl"
        key="WebMapUrl"
        name="WebMapUrl"
        onChange={props.handleWebMapUrlChange}
        placeholder={props.webMapUrl}
      />
      </label> 
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={props.createThumbnailImage}
      >Create Image!</button>
    </div>
  );
}

export default Controls;