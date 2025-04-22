import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/app/context/AuthContext';

const Navbar = () => {
  const router = useRouter();
  const { AuthData, dispatch } = useContext(AuthContext);
  const [ProfilePic,SetProfilePic] = useState()
  const handleLogout = () => {
    dispatch({ type: 'SIGN_OUT' });
    router.push('/');
  };

  useEffect(()=>{
    SetProfilePic(AuthData.ProfilePicture)
  },[])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Site Name */}
        <a className="navbar-brand fw-bold text-dark" href="/" style={{ fontSize: '24px' }}>
          Expense Tracker
        </a>

        {/* Right Side */}
        <div className="d-flex align-items-center gap-3">

          {/* Profile Image */}
          <img
            src={ProfilePic || 'https://via.placeholder.com/40'}
            alt="Profile"
            className="rounded-circle"
            width="40"
            height="40"
          />

          {/* Logout Button */}
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
