import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing

// Data for the categories with URLs for each item
const categories = [
  {
    title: 'Topwear',
    items: [
      { name: 'T-Shirts', link: '/tshirts' },
      { name: 'Casual Shirts', link: '/casual-shirts' },
      { name: 'Formal Shirts', link: '/formal-shirts' },
      { name: 'Sweatshirts', link: '/sweatshirts' },
      { name: 'Sweaters', link: '/sweaters' },
      { name: 'Jackets', link: '/jackets' },
      { name: 'Blazers & Coats', link: '/blazers-coats' },
      { name: 'Suits', link: '/suits' },
      { name: 'Rain Jackets', link: '/rain-jackets' },
    ],
  },
  {
    // Add a separator line before this section
    title: 'Indian & Festive Wear',
    items: [
      { name: 'Kurtas & Kurta Sets', link: '/kurtas' },
      { name: 'Sherwanis', link: '/sherwanis' },
      { name: 'Nehru Jackets', link: '/nehru-jackets' },
      { name: 'Dhotis', link: '/dhotis' },
    ],
    highlight: true,
  },
  {
    title: 'Bottomwear',
    items: [
      { name: 'Jeans', link: '/jeans' },
      { name: 'Casual Trousers', link: '/casual-trousers' },
      { name: 'Formal Trousers', link: '/formal-trousers' },
      { name: 'Shorts', link: '/shorts' },
      { name: 'Track Pants & Joggers', link: '/track-pants-joggers' },
    ],
  },
  {
    title: 'Innerwear & Sleepwear',
    items: [
      { name: 'Brief & Trunks', link: '/brief-trunks' },
      { name: 'Boxers', link: '/boxers' },
      { name: 'Vests', link: '/vests' },
      { name: 'Sleepwear & Loungewear', link: '/sleepwear-loungewear' },
      { name: 'Thermals', link: '/thermals' },
    ],
    highlight: true,
  },
  {
    title: 'Plus Size',
    items: [],
  },
];

const Sample = () => {
  return (
    <div className="flex space-x-10 p-6 bg-white w-[1200px]">
      {/* Left Column */}
      <div className=''>
        {categories.slice(0, 2).map((category, index) => (
          <div key={index}>
            <h2 className={`text-lg font-bold ${category.highlight ? 'text-pink-600' : ''}`}>
              {category.title}
            </h2>
            {category.items.length > 0 ? (
              <ul className="space-y-2 text-gray-600">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link} className="hover:text-blue-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            {/* Add a divider after Topwear */}
            {category.title === 'Topwear' && (
              <div className="my-4 border-t border-gray-300"></div>
            )}
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div>
        {categories.slice(2).map((category, index) => (
          <div key={index}>
            <h2 className={`text-lg font-bold ${category.highlight ? 'text-pink-600' : ''}`}>
              {category.title}
            </h2>
            {category.items.length > 0 ? (
              <ul className="space-y-2 text-gray-600">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link} className="hover:text-blue-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample;
