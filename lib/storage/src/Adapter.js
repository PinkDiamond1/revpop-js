/**
 * The Revolution Populi Project
 * Copyright (C) 2020 Revolution Populi Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//TODO::change to interface
class Adapter {
    async open() {
        return Promise.resolve();
    }

    async close() {
        return Promise.resolve();
    }

    /**
     * Store the passed value under the passed key
     *
     * @param {Uint8Array} val
     * @returns {Promise<String>}
     */
    async put(val) { // eslint-disable-line require-await
    }

    /**
     * Retrieve the value for the passed key
     *
     * @param {String} key
     * @returns {Promise<Uint8Array>}
     */
    async get(key) { // eslint-disable-line require-await
    }

    /**
     * Remove the record for the passed key
     *
     * @param {String} key
     * @returns {Promise<boolean>}
     */
    async remove (key) { // eslint-disable-line require-await
    }
}

export default Adapter;
