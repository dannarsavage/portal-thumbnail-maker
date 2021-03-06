//import esriConfig from "@arcgis/core/config.js";
//import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
//import MapView from "@arcgis/core/views/MapView";
//import WebMap from "@arcgis/core/WebMap";
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

    /*
    esriConfig.apiKey = "I've deleted the API that was here";
    const view = new MapView({
      map: new WebMap({
        basemap: "arcgis-hillshade-light" //"terrain"
      }),
      center: [-116.50500,42.40700],
      zoom: 13
    });
    */

    this.state = {
      itemTitle: "Item Title",
      itemType: "Item Type",
      showItemType: true,
      isInternalItem: true,
      mapImageSource: undefined,
      webMapUrl: undefined,
      //mapView: view,
      logoUrl: "./logo512.png"
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
      window.open(dataUrl);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }
  
  /**
   * Handles the user selecting a web map to use as the thumbnail's main graphic
   * @param {string} value  URL of a web map entered by the user
   */
  handleWebMapUrlChange(value) {
    /*
    console.log(value);
    const layer = new FeatureLayer({
      url: value
    });
    const mapView = this.state.mapView;
    mapView.map.layers.removeAll();
    mapView.map.layers.add(layer);
    mapView.goTo(layer.fullExtent);
    console.log(layer.fullExtent);
    this.setState({
      webMapUrl: value,
      mapView: mapView
    });
    */
  }

  /**
   * Handles the user selecting a map image to use as the logo
   * @param {file} selectedFile  File selected by the user
   */
  handleLogoSelection(selectedFile) {
    console.log(selectedFile);
    var reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        logoUrl: reader.result
      });
    }
    reader.readAsDataURL(selectedFile);
  }

  render() {
    return (
      <div className="grid-container">
        <div className="column-24">
          <h1>Thumbnail Generator for SnarkGIS</h1>
          <p>
            Use the controls on the left to manipulate the thumbnail on the right.
            When you're ready, click "Create Image!" at the bottom.
          </p>
        </div>
        <div className="column-10">
          <Controls 
            id="Controls" 
            handleChangeItemTitleText={(event) => this.handleChangeItemTitleText(event.target.value)}
            itemTitle={this.state.itemTitle}
            handleChangeItemTypeText={(event) => this.handleChangeItemTypeText(event.target.value)}
            itemType={this.state.itemType}
            toggleIsInternalItem={() => this.toggleIsInternalItem()}
            isInternalItem={this.state.isInternalItem}
            handleMapImageSelection={(event) => this.handleMapImageSelection(event.target.files[0])}
            createThumbnailImage={() => this.createThumbnailImage()}
            handleWebMapUrlChange={(event) => this.handleWebMapUrlChange(event.target.value)}
            webMapUrl={this.state.webMapUrl}
            logoUrl={this.state.logoUrl}
            handleLogoSelection={(event) => this.handleLogoSelection(event.target.files[0])}
          />
        </div>
        <div className="column-14">
          <Thumbnail
            id="Thumbnail"
            itemTitle={this.state.itemTitle}
            itemType={this.state.itemType}
            showItemType={this.state.showItemType}
            isInternalItem={this.state.isInternalItem}
            mapImageSource={this.state.mapImageSource}
            webMapUrl={this.state.webMapUrl}
            //mapView={this.state.mapView}
            logoUrl={this.state.logoUrl}
          />
        </div>
      </div>
    );
  }
}
        
export default App;
