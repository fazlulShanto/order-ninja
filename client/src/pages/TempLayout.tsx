
import {Outlet} from 'react-router-dom';

function TempLayout() {
  return (
    <div>
        <p>This is TempLayout</p>
        <Outlet />
    </div>
  )
}

export default TempLayout