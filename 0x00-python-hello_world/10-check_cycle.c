#include "lists.h"

/**
 * check_cycle - funtion to check if a singly linked list has a cycle in it
 * @list: linked list
 * Return: 0 or 1
 */

int check_cycle(listint_t *list)
{
	listint_t *fast;
	listint_t *slow;

	if (!list || !list->next)
		return (0);
	fast = list;
	slow = list;

	while (slow != NULL && fast != NULL && fast->next != NULL)
	{
		slow = slow->next;
		fast = fast->next->next;
		if (slow == fast)
		{
		return (1);
		}
	}
	return (0);
}
