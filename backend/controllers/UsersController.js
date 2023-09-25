// backend/controllers/UsersController.js
import { data } from '../data.js';

const internalServerErrMsg = 'Internal Server Error';

/**
 * /api/users
 *   get:
 *     tags:
 *       - users
 *     @description : returns the array of users
 *     response:
 *       200:
 *          description: returns the array of users
 */
export const getUsers = async (req, res) => {
  try {
    const result = [];

    // function to generate response
    function getUserDetailsWithChildrenCount(data) {
      const userDetails = {
        id: data.id,
        name: data.name,
        age: data.age,
        childrenCount: 0,
      };
      let count = 0;
      if (data.children && data.children.length > 0) {
        for (const child of data.children) {
          count = 0;
          getUserDetailsWithChildrenCount(child);
          count++;
        }
      }
      userDetails.childrenCount = count;
      result.push(userDetails);
    }

    // Function call to get modified response
    getUserDetailsWithChildrenCount(data);

    res.json({ users: result.reverse() });
  } catch (error) {
    console.error('Error fetching data from the external API:', error);
    res.status(500).json({ error: internalServerErrMsg });
  }
};
