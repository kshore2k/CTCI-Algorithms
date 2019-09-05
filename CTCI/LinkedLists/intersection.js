 // Intersection: 
// Given two (singly) linked lists, determine if the two lists intersect. 
// Return the inter­secting node. Note that the intersection is defined based on reference, not value.
// That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, 
// then they are intersecting.

// Input: 2 SLLists
// Output: boolean
// Constraint: optimize
// Edge Cases: 1 List Empty, Both Lists Empty;

// Pseudo
// Check if the tails are the same node. If so there is an intersection.
// If 2 lists have the same length, traverse each and compare until you find node reference equality.
// If lists have different lengths, find the difference(x) and start longer list pointer x nodes forward.Shorter list pointer
// starts at head as usual..
// Traverse as before comparing for equality at each node.
// If equality is found return either current node
// Else return false

// Time complexity: O(n)
// Space complexity: O(1)

let intersectionRevised = (sL1,sL2) => {
    let sL1Tail = sL1.head;
    let sL2Tail = sL2.head;
// Find Tails
    while(sL1Tail.next != null){
        sL1Tail = sL1Tail.next;
    }
    while(sL2Tail.next != null){
        sL2Tail = sL2Tail.next;
    }

// If Tails Match, Lists do intersect
    if(sL1Tail === sL2Tail){

        if(sL1.count() === sL2.count()){ // if list lengths are the same traverse each list until you find node equality
            let sL1current = sL1.head;
            let sL2current = sL2.head;

            while(sL1current && sL2current){
                if(sL1current === sL2current){
                    return sL2current;
                }
                sL1current = sL1current.next;
                sL2current = sL2current.next;
            }
        } else { // lists do intersect but list lengths dont match
            let diff = Math.abs(sL1.count() - sL2.count()); // find the difference in list lengths(diff)
            
            let longerList = (sL1.count() > sL2.count()) ? sL1 : sL2; // Find longer list
            let shorterList = (longerList === sL1) ? sL2 : sL1; // And shorter list

            let longerCurrent = longerList.head;
            for(var i = 1; i <= diff; i++){  // set pointer on longer list to start (diff) nodes forward
                longerCurrent = longerCurrent.next;
            };

            let shorterCurrent = shorterList.head;

            while(longerCurrent && shorterCurrent){ // then traverse each as before and compare
                if(longerCurrent === shorterCurrent){
                    return shorterCurrent;
                }
                longerCurrent = longerCurrent.next;
                shorterCurrent = shorterCurrent.next;
            };
        }
    } else {
        return false; // no equality found
    };
};
