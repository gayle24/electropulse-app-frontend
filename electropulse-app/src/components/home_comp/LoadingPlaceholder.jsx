const LoadingPlaceholder = () => (
    <div className="card border border-warning shadow p-3 mb-5 bg-body rounded" aria-hidden="true" style={{ width: '16rem', height: '28rem' }}>
      <img src="https://urbanmac.co.ke/wp-content/uploads/2023/04/100105542-2.jpg" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <button
          type="button"
          className="btn btn-outline-warning disabled placeholder col-6"
        >
          
        </button>
      </div>
    </div>
  );
export default LoadingPlaceholder  