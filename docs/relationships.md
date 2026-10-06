# Database Reltationships

All of this is a WIP and is subject to change

## Entities

### User
- ID: Identifier
- Username: String
- Email: String
- Password: Composite:
	- Hash: String
	- Salt: String
- PetIDs: Multivalued of Identifier of Pet

### Pet
- ID: Identifier
- OwnerID: Identifier of owned User
- Name: String
- Species: Integer (Frontend ID)
- PrimaryColor: Integer (Color)
- Traits: String (Frontend JSON)
- Level: Integer
- Experience: Integer
- Hunger: Integer
- AwardIDs: Multivalued of Identifier of Award
- FriendIDs: Multivalued of Identifier of Pet

### Award
- ID: Identifier
- OwnerID: Identifier of Pet
- Sprite: Integer (Frontend ID)
- Description: String

## "Business" Rules

**User**s may *Adopt* any number of **Pet**s, each **Pet** must be *Owned* by at most one **User**

**Pet**s may *Earn* any number of **Award**s, each **Award** must be *Earned* by at most one **Pet**

**Pet**s may *Befriend* any number of other **Pet**s, **Pets** may be *Befriended* by any number of other **Pet**s

## Diagrams
TODO!