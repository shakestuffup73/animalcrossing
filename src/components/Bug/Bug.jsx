const Bug = ({bug}) => {
  return (
    <div id="bugdiv">
      <h2>{bug.name["name-USen"]}</h2>
      <img src={bug.image_uri} alt="bug" />
      <h4>{bug['museum-phrase']}</h4>
    </div> 
  );
}

export default Bug;