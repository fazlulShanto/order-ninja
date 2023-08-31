import { Input } from 'antd';

const { Search } = Input;

function MarketplaceSearchbar({ onSearch }) {
  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <Search placeholder="Search..." onSearch={handleSearch} enterButton />
  );
}

export default MarketplaceSearchbar;
