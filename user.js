class User {
	constructor(id, fname, lname, email, uname, pass) {
		this.id = id
		this.fname = fname
		this.lname = lname
		this.email = email
		this.uname = uname
		this.pass = pass
	}

	/**
	 * 
	 * @param {String} pass 
	 * @returns {String}
	 */
	confirmPass(pass) {
		return this.pass === pass
	}
}