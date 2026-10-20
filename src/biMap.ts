// !!!!
// !!!! This is temporary until i find a spot for this!!
// !!!!

// * Copied by ai since well i dont know how to use it;
// * I will use its implementation by myself though

// TODO: CHANGE CODE TO SUPPORT LOCATION FORMAT

class LocationBiMap {
  // Use private maps to hold the data in both directions
  private idToLocation = new Map<string, string>();
  private locationToId = new Map<string, string>();

  // Add or update a pair
  set(id: string, location: string): void {
    // 1. Remove existing pairs to keep data perfectly synchronized
    if (this.idToLocation.has(id)) {
      const oldLocation = this.idToLocation.get(id)!;
      this.locationToId.delete(oldLocation);
    }
    if (this.locationToId.has(location)) {
      const oldId = this.locationToId.get(location)!;
      this.idToLocation.delete(oldId);
    }

    // 2. Insert the new bidirectional relationship
    this.idToLocation.set(id, location);
    this.locationToId.set(location, id);
  }

  // Look up location using an ID
  getLocation(id: string): string | undefined {
    return this.idToLocation.get(id);
  }

  // Look up ID using a location
  getId(location: string): string | undefined {
    return this.locationToId.get(location);
  }

  // Delete an entire pair by providing the ID
  deleteById(id: string): boolean {
    const location = this.idToLocation.get(id);
    if (!location) return false;

    this.idToLocation.delete(id);
    this.locationToId.delete(location);
    return true;
  }

  // Get total number of pairs
  get size(): number {
    return this.idToLocation.size;
  }
}
