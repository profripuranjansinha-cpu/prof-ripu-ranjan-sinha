import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useProfileInfo() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["profileInfo"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getProfileInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFocusAreas() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["focusAreas"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFocusAreas();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCommunitySegments() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["communitySegments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCommunitySegments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGlobalInitiatives() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["globalInitiatives"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGlobalInitiatives();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitEngagementRequest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      role,
      sector,
      message,
    }: {
      name: string;
      email: string;
      role: string;
      sector: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitEngagementRequest(name, email, role, sector, message);
    },
  });
}
