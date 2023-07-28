import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1554079501-d62bfb6f3567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Full house battery backup is coming this year</h2>
        <p className="info">
          <a href="" className="author">
            Nikhil Borse
          </a>
          <time>2023-12-5 12:12</time>
        </p>
        <p className="summery">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
      </div>
    </div>
  );
}
