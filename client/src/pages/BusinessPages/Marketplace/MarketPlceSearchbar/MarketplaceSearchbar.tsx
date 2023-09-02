import { Input } from 'antd';

const { Search } = Input;

function MarketplaceSearchbar({ onSearch } : any) {
  const handleSearch = (value : any) => {
    onSearch(value);
  };

  return (
    <Search placeholder="Search..." onSearch={handleSearch} enterButton />
  );
}

export default MarketplaceSearchbar;
