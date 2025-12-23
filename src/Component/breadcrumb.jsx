const Breadcrumbs = ({ links }) => {
  return (
    <div className="breadcrumbs_area other_bread">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_content">
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    {item.url ? <a href={item.url}>{item.label}</a> : item.label}
                    {index < links.length - 1 && <span> / </span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
<Breadcrumbs
  links={[
    { label: "home", url: "index.html" },
    { label: "about us" },
  ]}
/>;
