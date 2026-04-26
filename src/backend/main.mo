import List "mo:core/List";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type FocusArea = {
    title : Text;
    description : Text;
    icon : Text;
  };

  module FocusArea {
    public func compare(focusArea1 : FocusArea, focusArea2 : FocusArea) : Order.Order {
      Text.compare(focusArea1.title, focusArea2.title);
    };
  };

  type CommunitySegment = {
    title : Text;
    description : Text;
  };

  module CommunitySegment {
    public func compare(communitySegment1 : CommunitySegment, communitySegment2 : CommunitySegment) : Order.Order {
      Text.compare(communitySegment1.title, communitySegment2.title);
    };
  };

  type GlobalInitiative = {
    title : Text;
    description : Text;
    status : Text;
  };

  module GlobalInitiative {
    public func compare(globalInitiative1 : GlobalInitiative, globalInitiative2 : GlobalInitiative) : Order.Order {
      Text.compare(globalInitiative1.title, globalInitiative2.title);
    };
  };

  type Testimonial = {
    author : Text;
    role : Text;
    organization : Text;
    quote : Text;
  };

  module Testimonial {
    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Text.compare(testimonial1.author, testimonial2.author);
    };
  };

  type EngagementRequest = {
    name : Text;
    email : Text;
    role : Text;
    sector : Text;
    message : Text;
  };

  module EngagementRequest {
    public func compare(engagementRequest1 : EngagementRequest, engagementRequest2 : EngagementRequest) : Order.Order {
      Text.compare(engagementRequest1.name, engagementRequest2.name);
    };
  };

  let engagementRequests = List.empty<EngagementRequest>();

  // Static Data
  public query ({ caller }) func getProfileInfo() : async {
    name : Text;
    titles : Text;
    bio : Text;
    visionStatement : Text;
    credentials : Text;
  } {
    {
      name = "Prof. Ripu Ranjan Sinha";
      titles = "Global Leader, Policy Strategist, Innovation Expert";
      bio = "Prof. Ripu Ranjan Sinha is a globally recognized leader in technology, policy, and sustainable development. With over 30 years of experience, he has advised governments, organizations, and institutions worldwide.";
      visionStatement = "To create a sustainable future through innovative solutions, empowered communities, and collaborative global efforts.";
      credentials = "PhD in Policy Studies, MBA, Multiple international awards";
    };
  };

  public query ({ caller }) func getFocusAreas() : async [FocusArea] {
    let areas = [
      {
        title = "Economy";
        description = "Driving economic growth through sustainable practices.";
        icon = "economy";
      },
      {
        title = "Culture";
        description = "Preserving and promoting cultural heritage.";
        icon = "culture";
      },
      {
        title = "Technology";
        description = "Advancing technological innovation for societal benefit.";
        icon = "technology";
      },
      {
        title = "Agriculture";
        description = "Modernizing agriculture for food security.";
        icon = "agriculture";
      },
      {
        title = "Renewable Energy";
        description = "Promoting clean energy solutions.";
        icon = "renewable_energy";
      },
      {
        title = "Food Security";
        description = "Ensuring access to nutritious food worldwide.";
        icon = "food_security";
      },
      {
        title = "Mental Health";
        description = "Advocating for mental health awareness and support.";
        icon = "mental_health";
      },
    ];
    areas.sort();
  };

  public query ({ caller }) func getCommunitySegments() : async [CommunitySegment] {
    let segments = [
      {
        title = "Global Leaders";
        description = "Influential leaders shaping the world.";
      },
      {
        title = "Associates";
        description = "Partners and collaborators.";
      },
      {
        title = "Global Technologists";
        description = "Innovators driving technological advancement.";
      },
      {
        title = "Solution Architects";
        description = "Experts designing practical solutions.";
      },
      {
        title = "Policy Enablers";
        description = "Professionals shaping policy frameworks.";
      },
      {
        title = "Consultants";
        description = "Advisors with specialized expertise.";
      },
      {
        title = "Designers & Developers";
        description = "Creatives and technical specialists.";
      },
      {
        title = "Youth";
        description = "Next generation of global changemakers.";
      },
    ];
    segments.sort();
  };

  public query ({ caller }) func getGlobalInitiatives() : async [GlobalInitiative] {
    let initiatives = [
      {
        title = "Sustainable Development Program";
        description = "An initiative to promote sustainability in developing nations.";
        status = "Active";
      },
      {
        title = "Cultural Exchange Initiative";
        description = "Fostering cultural understanding globally.";
        status = "Active";
      },
      {
        title = "Global Mental Health Awareness";
        description = "Raising awareness and support for mental health.";
        status = "Active";
      },
      {
        title = "Renewable Energy Solutions";
        description = "Promoting clean and sustainable energy use.";
        status = "Paused";
      },
    ];
    initiatives.sort();
  };

  public query ({ caller }) func getTestimonials() : async [Testimonial] {
    let testimonials = [
      {
        author = "John Smith";
        role = "CEO";
        organization = "Global Tech Solutions";
        quote = "Prof. Sinha's work has been instrumental in shaping our company's sustainability strategy.";
      },
      {
        author = "Maria Garcia";
        role = "Director";
        organization = "World Health Organization";
        quote = "His innovative approach to public health has made a significant impact globally.";
      },
      {
        author = "Raj Patel";
        role = "Prime Minister";
        organization = "Indian Government";
        quote = "Prof. Sinha's policy expertise has been invaluable to our nation.";
      },
      {
        author = "Linda Zhang";
        role = "Founder";
        organization = "Tech for Good";
        quote = "A true visionary and global leader.";
      },
    ];
    testimonials.sort();
  };

  // Engagement Request Logic
  public shared ({ caller }) func submitEngagementRequest(name : Text, email : Text, role : Text, sector : Text, message : Text) : async Bool {
    if (name.size() == 0 or email.size() == 0 or role.size() == 0 or sector.size() == 0 or message.size() == 0) {
      Runtime.trap("All fields are required.");
    };

    let request : EngagementRequest = {
      name;
      email;
      role;
      sector;
      message;
    };
    engagementRequests.add(request);
    true;
  };

  public query ({ caller }) func getAllEngagementRequests() : async [EngagementRequest] {
    engagementRequests.toArray().sort();
  };
};
